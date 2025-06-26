import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false,
})
export class CarritoPage implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router,) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
    });
  }

  goToMenu(){
    this.router.navigate(['/menucombo']);
  }
  goToCompra(){
    this.clearCart();
    this.router.navigate(['/compra']);
  }

  getItemTotal(item: CartItem): number {
    return Math.round(item.price * item.quantity);
  }

  getGrandTotal(): number {
    return Math.round(this.cartItems.reduce((sum, item) => sum + this.getItemTotal(item), 0));
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  increaseQuantity(item: CartItem) {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.id, item.quantity - 1);
    } else {
      //this.removeItem(item);
    }
  }
}
