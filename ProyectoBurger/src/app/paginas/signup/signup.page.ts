import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';

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
    passwConfirm: '',
    direccion: '',
    numero: ''
  };


  ngOnInit() {
  }
    constructor(
    private apiService: ApiService,
    private router: Router,
    private toastController: ToastController
  ) {}

  register() {
    if (!this.userData.nombre || !this.userData.correo || !this.userData.passw || !this.userData.passwConfirm || !this.userData.direccion || !this.userData.numero) {
      this.mostrarToast('Por favor completa todos los campos', 'danger');
      return
    }

    this.apiService.register(this.userData).subscribe({
      next: (response) => {
        if (response.success) {
          this.mostrarToast('Usuario registrado exitosamente', 'success');
          this.router.navigate(['/login']);
        }
      },
      error: (err) => {
        console.error('Error completo:', err);
        this.mostrarToast(err.error?.message || 'Error desconocido', 'danger');
      }
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
  
  goToLogin() {
    this.router.navigate(['/login']);
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
