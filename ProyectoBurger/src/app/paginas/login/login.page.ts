import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  correo: string = '';
  passw: string = '';

  constructor(
    private router: Router,
    private api: ApiService,
    private authService: AuthService
  ) { }

  login() {
    this.api.login(this.correo, this.passw).subscribe({
      next: (response) => {
        if (response.token && response.user) {
          this.authService.login(response.token, response.user);
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.error('Error en login:', err);
      }
    });
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}