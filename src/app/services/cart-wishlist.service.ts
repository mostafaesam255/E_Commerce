    import { Injectable } from '@angular/core';
    import { BehaviorSubject, Observable } from 'rxjs';

    @Injectable({
    providedIn: 'root'
    })
    export class CartWishlistService {
    private wishlistItemsSubject = new BehaviorSubject<any[]>([]);
    private wishlistCountSubject = new BehaviorSubject<number>(0);
    wishlistItems$: Observable<any[]> = this.wishlistItemsSubject.asObservable();
    wishlistCount$: Observable<number> = this.wishlistCountSubject.asObservable();

    private cartItemsSubject = new BehaviorSubject<any[]>([]);
    private cartCountSubject = new BehaviorSubject<number>(0);
    cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();
    cartCount$: Observable<number> = this.cartCountSubject.asObservable();

    addToWishlist(product: any) {
        const currentItems = this.wishlistItemsSubject.value;
        if (!currentItems.some(item => item.name === product.name)) {
        this.wishlistItemsSubject.next([...currentItems, product]);
        this.wishlistCountSubject.next(this.wishlistCountSubject.value + 1);
        }
    }

    removeFromWishlist(product: any) {
        const currentItems = this.wishlistItemsSubject.value;
        const updatedItems = currentItems.filter(item => item.name !== product.name);
        this.wishlistItemsSubject.next(updatedItems);
        this.wishlistCountSubject.next(this.wishlistCountSubject.value - 1);
    }

    addToCart(product: any) {
        const currentItems = this.cartItemsSubject.value;
        if (!currentItems.some(item => item.name === product.name)) {
        this.cartItemsSubject.next([...currentItems, product]);
        this.cartCountSubject.next(this.cartCountSubject.value + 1);
        }
    }

    moveAllToCart() {
        const wishlistItems = this.wishlistItemsSubject.value;
        const currentCartItems = this.cartItemsSubject.value;
        const newCartItems = [...currentCartItems];
        wishlistItems.forEach(item => {
        if (!newCartItems.some(cartItem => cartItem.name === item.name)) {
            newCartItems.push(item);
        }
        });
        this.cartItemsSubject.next(newCartItems);
        this.cartCountSubject.next(newCartItems.length);
        this.wishlistItemsSubject.next([]);
        this.wishlistCountSubject.next(0);
    }

    resetWishlist() {
        this.wishlistItemsSubject.next([]);
        this.wishlistCountSubject.next(0);
    }

    resetCart() {
        this.cartItemsSubject.next([]);
        this.cartCountSubject.next(0);
    }

    updateCartItems(items: any[]) {
        this.cartItemsSubject.next(items);
    }

    updateCartCount(count: number) {
        this.cartCountSubject.next(count);
    }
    }