import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  dropdownOpen = false;

  isAuthenticated = false;
  private authSub!: Subscription;
  private cartSub!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // Verificación inicial
    this.isAuthenticated = this.authService.getAuthState();
    
    // Suscripción a cambios
    this.authSub = this.authService.currentAuthState.subscribe(
      state => this.isAuthenticated = state
    );
    this.cartSub = this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnDestroy() {
    this.authSub?.unsubscribe();
    this.cartSub?.unsubscribe();
  }

  goToHome() {
    this.dropdownOpen = false;
    this.router.navigate(['/home']);
  }

  goToLogin() {
    this.dropdownOpen = false;
    this.router.navigate(['/login']);
  }

  goToSignUp() {
    this.dropdownOpen = false;
    this.router.navigate(['/signup']);
  }

  goToProfile() {
    this.dropdownOpen = false;
    if (this.isAuthenticated) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.dropdownOpen = false;
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  toggleDropdown() {
    //console.log('Dropdown abierto:', this.dropdownOpen);
    this.dropdownOpen = !this.dropdownOpen;
  }

  goToCart(){
    this.dropdownOpen = false;
    this.router.navigate(['/carrito']);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  getItemTotal(item: CartItem): number {
    return Math.round(item.price * item.quantity);
  }

  getGrandTotal(): number {
    return Math.round(this.cartItems.reduce((sum, item) => sum + this.getItemTotal(item), 0));
  }
}