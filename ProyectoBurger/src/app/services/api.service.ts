import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) {}
  
  login(username: string, passw: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { username, passw });
  }
  getPerfil(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/perfil`, { headers });
  }
  getMenu(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }
  getDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }
}