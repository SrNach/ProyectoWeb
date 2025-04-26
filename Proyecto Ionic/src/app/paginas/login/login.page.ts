import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  ngOnInit() {}

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }
  
  goToSignUp() {
    this.router.navigate(['/signup']);
  }

}
