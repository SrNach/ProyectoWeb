import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menupapita',
  templateUrl: './menupapita.page.html',
  styleUrls: ['./menupapita.page.scss'],
  standalone: false,
})
export class MenupapitaPage implements OnInit {

  constructor(private router: Router) { }
  goToMenuBurger(){
    this.router.navigate(['/menuburger']);
  }
  goToMenuCombo(){
    this.router.navigate(['/menucombo']);
  }

  ngOnInit() {
  }

}
