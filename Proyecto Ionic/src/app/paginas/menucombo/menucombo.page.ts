import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menucombo',
  templateUrl: './menucombo.page.html',
  styleUrls: ['./menucombo.page.scss'],
  standalone: false,
})
export class MenucomboPage implements OnInit {

  constructor(private router: Router) { }
  goToMenuBurger(){
    this.router.navigate(['/menuburger']);
  }
  goToMenuPapita(){
    this.router.navigate(['/menupapita']);
  }

  ngOnInit() {
  }

}
