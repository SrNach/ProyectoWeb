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
  usuarios: any[] = [];
  password: string = '';
  correo: string = '';


  constructor(
    private router: Router,
    private api: ApiService
  ) { }
  ngOnInit() {
  }
  
  goToHome() {
    this.router.navigate(['/home']);
  }
  
  goToSignUp() {
    this.router.navigate(['/signup']);
  }

}
