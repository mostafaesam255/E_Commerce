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

interface BillingDetails {
  firstName: string;
  companyName: string;
  streetAddress: string;
  apartment: string;
  townCity: string;
  phoneNumber: string;
  emailAddress: string;
  saveInfo: boolean;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: Product[] = [];
  billingDetails: BillingDetails = {
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
    saveInfo: false
  };
  couponCode: string = '';
  paymentMethod: string = 'cash';

  constructor(private cartWishlistService: CartWishlistService) {}

  ngOnInit() {
    this.cartWishlistService.cartItems$.subscribe(items => {
      this.cartItems = items.map(item => ({
        ...item,
        quantity: item.quantity || 1
      }));
    });
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

  applyCoupon() {
    if (this.couponCode) {
      console.log('Coupon applied:', this.couponCode);
    }
  }

  placeOrder() {
    console.log('Order placed:', {
      billingDetails: this.billingDetails,
      cartItems: this.cartItems,
      paymentMethod: this.paymentMethod,
      total: this.getTotal()
    });
    this.cartWishlistService.resetCart();
  }
}