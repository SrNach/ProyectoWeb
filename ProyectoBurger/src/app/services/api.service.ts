import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  
  login(correo: string, passw: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { correo, passw });
  }
  register(userData: any): Observable<any> {
    //console.log('Datos de usuario a registrar:', userData);
    return this.http.post(`${this.apiUrl}/api/usuarios/register`, userData);
  }

  getPerfil(): Observable<any> {
    // Versión simplificada que usa el interceptor
    return this.http.get(`${this.apiUrl}/auth/perfil`);
  }

  getMenu(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/data`);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/usuarios`);
  }

  resetPassword(correo: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/pass-reset`, { correo });
  }

  verifyResetToken(correo: string, token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/verify-token`, { correo, token });
  }

  cambiarPassword(correo: string, passw: string): Observable<any> {
    if (!correo || !passw) {
      throw new Error('Todos los campos son obligatorios para cambiar la contraseña');
    }
    return this.http.post(`${this.apiUrl}/auth/change-passw`, {
      correo,
      passw,
    });
  }
}