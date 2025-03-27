import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './pages/error404/error404.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LogInComponent },
  { path: 'product', component: ProductDetailsComponent }, // غيرنا من 'product/:id' لـ 'product'
  { path: 'sign-up', component: SignUpComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', component: Error404Component }
];