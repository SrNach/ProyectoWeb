import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false
})
export class SignupPage implements OnInit {
  userData = {
    nombre: '',
    correo: '',
    passw: '',
    direccion: '',
    numero: ''
  };


  ngOnInit() {
  }
    constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  register() {
    if (!this.userData.nombre || !this.userData.correo || !this.userData.passw) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    this.apiService.register(this.userData).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigate(['/login']);
        }
      },
      error: (err) => {
        alert('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
        console.error('Error en registro:', err);
      }
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
  
  goToLogin() {
    this.router.navigate(['/login']);
  }

}
