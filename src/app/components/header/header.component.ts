import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartWishlistService } from '../../services/cart-wishlist.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;
  wishlistCount: number = 0;

  constructor(public cartWishlistService: CartWishlistService) {}

  ngOnInit() {
    this.cartWishlistService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
    this.cartWishlistService.wishlistCount$.subscribe(count => {
      this.wishlistCount = count;
    });
  }
}