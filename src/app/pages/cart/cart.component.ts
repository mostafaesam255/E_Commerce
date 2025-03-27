import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  quantity?: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  couponCode: string = '';

  constructor(private cartWishlistService: CartWishlistService) {}

  ngOnInit() {
    this.cartWishlistService.cartItems$.subscribe(items => {
      this.cartItems = items.map(item => ({
        ...item,
        quantity: item.quantity || 1
      }));
    });
  }

  decreaseQuantity(product: Product) {
    if (product.quantity && product.quantity > 1) {
      product.quantity--;
      this.updateCart();
    }
  }

  increaseQuantity(product: Product) {
    if (product.quantity) {
      product.quantity++;
      this.updateCart();
    }
  }

  getSubtotal(product: Product): number {
    const price = parseFloat(product.price.replace('$', ''));
    return price * (product.quantity || 1);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + this.getSubtotal(item);
    }, 0);
  }

  updateCart() {
    this.cartWishlistService.updateCartItems([...this.cartItems]);
  }

  applyCoupon() {
    if (this.couponCode) {
      console.log('Coupon applied:', this.couponCode);
    }
  }

  removeFromCart(product: Product) {
    const updatedItems = this.cartItems.filter(item => item.name !== product.name);
    this.cartWishlistService.updateCartItems(updatedItems);
    this.cartWishlistService.updateCartCount(updatedItems.length);
  }
}