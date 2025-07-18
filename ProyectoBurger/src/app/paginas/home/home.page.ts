import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
  ) {}
  ngOnInit() {
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToMenuCombo() {
    this.router.navigate(['/menucombo']);
  }

  goToMenuBurger() {
    this.router.navigate(['/menuburger']);
  }

  goToMenuPapita() {
    this.router.navigate(['/menupapita']);
  }
}