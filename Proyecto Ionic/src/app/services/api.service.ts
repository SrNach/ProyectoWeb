import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDatos(): Observable<any> {
    return this.http.get('assets/apidata.json');
  }

  postDatos(data: any): Observable<any> {
    return this.http.post('assets/apidata.json', data);
  }
}