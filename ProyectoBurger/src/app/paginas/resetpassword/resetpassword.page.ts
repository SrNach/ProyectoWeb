import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
  standalone: false
})
export class ResetpasswordPage implements OnInit {
  correo: string = '';
  tokenInput: string = '';
  enviado: boolean = false;
  verificado: boolean = false;

  passw: string = '';
  passwConfirm: string = '';

  constructor(
    private apiService : ApiService,
    private toastController : ToastController,
    private router : Router
  ) { }

  ngOnInit() {};

  resetPassw() {
    this.apiService.resetPassword(this.correo).subscribe({
      next: (res) => {
        //console.log('Respuesta del backend:', res);
        this.enviado = true;
        this.mostrarToast('Se ha enviado un correo para cambiar la contraseña', 'success');
      },
      error: (err) => {
        //console.error('Error al resetear contraseña:', err);
        this.mostrarToast(err.error?.message || 'Error desconocido', 'danger');
      }
    });
  }
  

  verifyToken() {
    this.apiService.verifyResetToken(this.correo, this.tokenInput).subscribe({
      next: (res) => {
        if (res.valid) {
          console.log('Token válido');
          this.mostrarToast('Se ha verificado correctamente el código', 'success');
          this.verificado = true;
        } else {
          this.mostrarToast('El código ingresado no es válido', 'danger');
        }
      },
      error: (err) => {
        this.mostrarToast(err.error?.message || 'Error desconocido', 'danger');
        //console.error('Error:', err)
        this.verificado = false;
      }
    });
  }

  cambiarPassw() {
    if (!this.passw || !this.passwConfirm) {
      this.mostrarToast('Debe completar todos los campos', 'danger');
      return;
    }
    if (this.passw !== this.passwConfirm) {
      this.mostrarToast('Las contraseñas no coinciden', 'danger');
      return;
    }
    this.apiService.cambiarPassword(this.correo, this.passw).subscribe({
      next: (res) => {
        this.mostrarToast('Contraseña cambiada correctamente', 'success');
        this.limpiarCampos();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.mostrarToast(err.error?.message || 'Error desconocido', 'danger');
      }
    }); 
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

  limpiarCampos(){
    this.correo = '';
    this.tokenInput = '';
    this.passw = '';
    this.passwConfirm = '';
    this.enviado = false;
    this.verificado = false;
  }
}
