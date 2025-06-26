import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone:false,
})
export class ProfilePage implements OnInit {
  userData: any;
  constructor(private router: Router,
              private authService: AuthService
  ) { }

  ngOnInit() {
    this.userData = this.authService.getUserData();
    console.log('Datos del usuario:', this.userData);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  logout() {
  this.authService.logout(); // Esto limpia el localStorage y actualiza los BehaviorSubjects
  this.router.navigate(['/home']); // Redirige a la página principal
  }

}
