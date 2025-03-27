import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CartWishlistService } from '../../services/cart-wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterLinkActive, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  days: number = 3;
  hours: number = 23;
  minutes: number = 19;
  seconds: number = 56;
  musicDays: number = 5;
  musicHours: number = 23;
  musicMinutes: number = 59;
  musicSeconds: number = 35;
  private musicTimer: any;
  private timer: any;
  currentSlide: number = 0;
  exploreSlide: number = 0;

  flashSaleProducts = [
    {id: 1, name: 'HAVIT HV-G92 Gamepad', price: '$120', originalPrice: '$160', image: '../Frame 611.png', discount: '40%', rating: 4, reviews: 88 },
    {id: 2,  name: 'AK-900 Wired Keyboard', price: '$960', originalPrice: '$1160', image: '../Frame 612.png', discount: '35%', rating: 4, reviews: 75 },
    { id: 3, name: 'IPS LCD Gaming Monitor', price: '$370', originalPrice: '$400', image: '../Frame 613.png', discount: '30%', rating: 4, reviews: 99 }
  ];
  flashSaleProductsSecondSlide = [
    {id: 4,  name: 'S-Series Comfort Chair', price: '$375', originalPrice: '$400', image: '../Frame 614.png', discount: '25%', rating: 4, reviews: 99 },
    {id: 5,  name: 'Gaming Headset', price: '$80', originalPrice: '$100', image: '../Frame 611.png', discount: '20%', rating: 4, reviews: 90 }
  ];
  bestSellingProducts = [
    {id: 6,  name: 'The north coat', price: '$260', originalPrice: '$360', image: '../Frame 605.png', rating: 4, reviews: 65 },
    {id: 7,  name: 'Gucci duffle bag', price: '$960', originalPrice: '$1160', image: '../Frame 606.png', rating: 4, reviews: 65 },
    {id: 8,  name: 'RGB liquid CPU Cooler', price: '$560', originalPrice: '$760', image: '../Frame 610.png', rating: 4, reviews: 65 },
    {id: 9,  name: 'Small Bookshelf', price: '$560', originalPrice: '$760', image: '../Frame 6.png', rating: 4, reviews: 65 }
  ];
  exploreProductsFirstSlide = [
    {id: 10,  name: 'Breed Dry Dog Food', price: '$100', image: '../Frame 604.png', rating: 3, reviews: 35 },
    {id: 11,  name: 'Canon EOS DSLR Camera', price: '$360', image: '../Frame 7.png', rating: 4, reviews: 95 },
    {id: 12,  name: 'ASUS FHD Gaming Laptop', price: '$700', image: '../Frame 8.png', rating: 5, reviews: 325 },
    {id: 13,  name: 'Curology Product Set', price: '$500', image: '../curology-j7pKVQrTUsM-unsplash 1.png', rating: 4, reviews: 145 }
  ];
  exploreProductsSecondSlide = [
    {id: 14,  name: 'Kids Electric Car', price: '$960', image: '../New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png', rating: 4, reviews: 65, isNew: true, colors: ['bg-danger', 'bg-warning'] },
    {id: 15,  name: 'Jr. Zoom Soccer Cleats', price: '$1160', image: '../Copa_Sense 1.png', rating: 4, reviews: 35, colors: ['bg-warning', 'bg-danger'] },
    {id: 16,  name: 'GP11 Shooter USB Gamepad', price: '$660', image: '../GP11_PRD3 1.png', rating: 4, reviews: 55, isNew: true, colors: ['bg-dark', 'bg-danger'] },
    {id: 17,  name: 'Quilted Satin Jacket', price: '$660', image: '../698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png', rating: 4, reviews: 55, colors: ['bg-teal', 'bg-danger'] }
  ];

  constructor(public cartWishlistService: CartWishlistService) {}

  ngOnInit() {
    const savedFlashSaleTime = localStorage.getItem('flashSaleEndTime');
    if (savedFlashSaleTime) {
      const endDate = new Date(parseInt(savedFlashSaleTime, 10));
      this.updateTimer(endDate);
    } else {
      this.startTimer();
    }

    const savedMusicTime = localStorage.getItem('musicEndTime');
    if (savedMusicTime) {
      const musicEndDate = new Date(parseInt(savedMusicTime, 10));
      this.updateMusicTimer(musicEndDate);
    } else {
      this.startMusicTimer();
    }
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
    if (this.musicTimer) clearInterval(this.musicTimer);
  }

  startTimer() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + this.days);
    endDate.setHours(endDate.getHours() + this.hours);
    endDate.setMinutes(endDate.getMinutes() + this.minutes);
    endDate.setSeconds(endDate.getSeconds() + this.seconds);
    localStorage.setItem('flashSaleEndTime', endDate.getTime().toString());
    this.updateTimer(endDate);
  }

  updateTimer(endDate: Date) {
    this.timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      if (distance <= 0) {
        clearInterval(this.timer);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        localStorage.removeItem('flashSaleEndTime');
        return;
      }
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  startMusicTimer() {
    const musicEndDate = new Date();
    musicEndDate.setDate(musicEndDate.getDate() + this.musicDays);
    musicEndDate.setHours(musicEndDate.getHours() + this.musicHours);
    musicEndDate.setMinutes(musicEndDate.getMinutes() + this.musicMinutes);
    musicEndDate.setSeconds(musicEndDate.getSeconds() + this.musicSeconds);
    localStorage.setItem('musicEndTime', musicEndDate.getTime().toString());
    this.updateMusicTimer(musicEndDate);
  }

  updateMusicTimer(musicEndDate: Date) {
    this.musicTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = musicEndDate.getTime() - now;
      if (distance <= 0) {
        clearInterval(this.musicTimer);
        this.musicDays = 0;
        this.musicHours = 0;
        this.musicMinutes = 0;
        this.musicSeconds = 0;
        localStorage.removeItem('musicEndTime');
        return;
      }
      this.musicDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.musicHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.musicMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.musicSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateCarousel();
    }
  }

  nextSlide() {
    if (this.currentSlide < 1) {
      this.currentSlide++;
      this.updateCarousel();
    }
  }

  prevExploreSlide() {
    if (this.exploreSlide > 0) {
      this.exploreSlide--;
      this.updateExploreCarousel();
    }
  }

  nextExploreSlide() {
    if (this.exploreSlide < 1) {
      this.exploreSlide++;
      this.updateExploreCarousel();
    }
  }

  updateCarousel() {
    const carousel = document.querySelector('#flashCarousel');
    if (carousel) {
      const bsCarousel = new (window as any).bootstrap.Carousel(carousel);
      bsCarousel.to(this.currentSlide);
    }
  }

  updateExploreCarousel() {
    const carousel = document.querySelector('#exploreCarousel');
    if (carousel) {
      const bsCarousel = new (window as any).bootstrap.Carousel(carousel);
      bsCarousel.to(this.exploreSlide);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  addToWishlist(event: MouseEvent, product: any) {
    const heartButton = event.currentTarget as HTMLElement;
    const heartIcon = heartButton.querySelector('i');
    if (heartIcon && heartIcon.classList.contains('bi-heart')) {
      heartIcon.classList.toggle('text-danger');
      if (heartIcon.classList.contains('text-danger')) {
        this.cartWishlistService.addToWishlist(product);
        console.log('Adding to Wishlist:', product);
      } else {
        this.cartWishlistService.removeFromWishlist(product);
      }
    }
  }

  addToCart(event: MouseEvent, product: any) {
    this.cartWishlistService.addToCart(product);
    console.log('Add To Cart clicked');
  }
}