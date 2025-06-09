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
}