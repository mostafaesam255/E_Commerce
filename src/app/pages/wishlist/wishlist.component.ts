import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartWishlistService } from '../../services/cart-wishlist.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Product {
  name: string;
  price: string;
  image: string;
  discount?: string;
  isNew?: boolean;
  originalPrice?: string;
  rating?: number;
  reviews?: number;
}

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems: Product[] = [];
  justForYouProducts: Product[] = [
    { name: 'ASUS FHD Gaming Laptop', price: '$960', originalPrice: '$1160', image: '../Frame 8.png', rating: 5, reviews: 65 },
    { name: 'IPS LCD Gaming Monitor', price: '$370', originalPrice: '$400', image: '../Frame 613.png', rating: 4, reviews: 99 },
    { name: 'HAVIT HV-G92 Gamepad', price: '$560', image: '../Frame 611.png', rating: 4, reviews: 88 },
    { name: 'AK-900 Wired Keyboard', price: '$200', image: '../Frame 612.png', rating: 4, reviews: 75 }
  ];

  constructor(private cartWishlistService: CartWishlistService) {}

  ngOnInit() {
    this.cartWishlistService.wishlistItems$.subscribe(items => {
      this.wishlistItems = items;
      console.log('Wishlist Items in WishlistComponent:', this.wishlistItems);
    });
  }

  addToCart(product: Product) {
    this.cartWishlistService.addToCart(product);
    this.cartWishlistService.removeFromWishlist(product);
  }

  removeFromWishlist(product: Product) {
    this.cartWishlistService.removeFromWishlist(product);
  }

  moveAllToCart() {
    this.cartWishlistService.moveAllToCart();
  }
}