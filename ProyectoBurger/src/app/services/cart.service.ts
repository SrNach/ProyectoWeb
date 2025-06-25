import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];
  private cart$ = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.cart$.next(this.cart);
    }
  }

  getCart() {
    return this.cart$.asObservable();
  }

  private updateCart() {
    this.cart$.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(item: CartItem) {
    const existing = this.cart.find(p => p.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    this.updateCart();
  }

  removeFromCart(item: CartItem) {
    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
    this.updateCart();
  }

  clearCart() {
    this.cart = [];
    this.updateCart();
  }

  updateQuantity(id: number, quantity: number) {
    const item = this.cart.find(p => p.id === id);
    if (item) {
      item.quantity = quantity;
    }
    this.updateCart();
  }


}
