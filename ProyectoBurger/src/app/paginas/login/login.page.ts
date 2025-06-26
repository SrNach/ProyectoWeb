import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

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
    private authService: AuthService,
    private toastController: ToastController
  ) { }

  login() {
    if (!this.correo || !this.passw) {
      this.mostrarToast('Debe completar todos los campos', 'danger');
      return;
    }
    this.api.login(this.correo, this.passw).subscribe({
      next: (response) => {
        if (response.token && response.user) {
          this.authService.login(response.token, response.user);
          this.mostrarToast('Bienvenido ' + response.user.nombre, 'success');
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.error('Error completo:', err);
        this.mostrarToast(err.error?.message || 'Error desconocido', 'danger');
      }
    });
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      color: color,
      position: 'top'
    });
    await toast.present();
  }
}