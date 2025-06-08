import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  password: string = '';
  correo: string = '';

  constructor(
    private router: Router,
    private api: ApiService,
  ) { }

  ngOnInit() {
  }
  
  login() {
    console.log('Datos enviados desde frontend:', this.correo, this.password);
    
    if (!this.correo || !this.password) {
      alert('Por favor ingresa correo y contraseña');
      return;
    }

    this.api.login(this.correo, this.password).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        // Guarda también el correo si lo necesitas
        if (res.correo) {
          localStorage.setItem('correo', res.correo);
        }
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error en login:', err);
        alert('Correo o contraseña incorrectos');
      }
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
  
  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}