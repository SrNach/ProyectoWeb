import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<any>(null);
  
  currentAuthState = this.isAuthenticated.asObservable();
  currentUser = this.currentUserSubject.asObservable();

  constructor() {
    this.checkAuthState();
  }

  private checkAuthState() {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    // Verificación básica del token (sin JWT helper)
    const hasValidToken = this.isTokenValid(token);
    
    this.isAuthenticated.next(hasValidToken);
    
    if (hasValidToken && userData) {
      this.currentUserSubject.next(JSON.parse(userData));
    } else {
      this.clearAuthData(); // Limpia si no es válido
    }
  }

  private isTokenValid(token: string | null): boolean {
    return !!token;
  }

  login(token: string, userData: any) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    this.isAuthenticated.next(true);
    this.currentUserSubject.next(userData);
  }

  logout() {
    this.clearAuthData();
  }

  private clearAuthData() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    this.isAuthenticated.next(false);
    this.currentUserSubject.next(null);
  }

  getAuthState(): boolean {
    return this.isAuthenticated.value;
  }

  getUserData() {
    return this.currentUserSubject.value;
  }
}