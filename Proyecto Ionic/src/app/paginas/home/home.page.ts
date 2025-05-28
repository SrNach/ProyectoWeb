import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router) { }
  
  goToProfile(){
    this.router.navigate(['/profile']);

  }
  goToMenuCombo(){
    this.router.navigate(['/menucombo']);
  }
  goToMenuBurger(){
    this.router.navigate(['/menuburger']);
  }
  goToMenuPapita(){
    this.router.navigate(['/menupapita']);
  }


}
