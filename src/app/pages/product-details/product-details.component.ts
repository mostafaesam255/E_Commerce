import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number | null = null;
  product: any = null;
  selectedImage: string = '';
  quantity: number = 1;
  relatedProducts: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productId = params['productId'] ? Number(params['productId']) : null;
      this.loadProductDetails();
      this.loadRelatedProducts();
    });
  }

  loadProductDetails() {
    const products = [
      {
        id: 1,
        name: 'Havic HV G-92 Gamepad',
        price: '$192.00',
        rating: 4,
        reviews: 150,
        inStock: true,
        description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        images: [
          '../Frame 894.png',
          '../Frame 897.png',
          '../Frame 896.png',
          '../Frame 895.png',
          '../Frame 919.png'
        ],
        colors: ['blue', 'pink', 'red'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      },
    ];
    this.product = products.find(p => p.id === this.productId) || null;
    if (this.product) {
      this.selectedImage = this.product.images[0];
    }
  }

  loadRelatedProducts() {
    this.relatedProducts = [
      { id: 2, name: 'HAVIT HV-G92 Gamepad', price: '$120', originalPrice: '$160', discount: '-40%', rating: 5, reviews: 88, image: '../Frame 611.png' },
      { id: 3, name: 'AK-900 Wired Keyboard', price: '$960', originalPrice: '$1160', discount: '-35%', rating: 4, reviews: 75, image: '../Frame 612.png' },
      { id: 4, name: 'IPS LCD Gaming Monitor', price: '$370', originalPrice: '$400', discount: '-30%', rating: 5, reviews: 99, image: '../Frame 613.png' },
      { id: 5, name: 'RGB liquid CPU Cooler', price: '$160', originalPrice: '$170', discount: '-30%', rating: 5, reviews: 65, image: '../Frame 610.png' }
    ];
  }

  changeImage(image: string) {
    this.selectedImage = image;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToWishlist(product: any) {
    console.log('Added to wishlist:', product);
  }

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}