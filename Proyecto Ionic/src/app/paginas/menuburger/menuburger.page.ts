import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuburger',
  templateUrl: './menuburger.page.html',
  styleUrls: ['./menuburger.page.scss'],
  standalone: false,
})
export class MenuburgerPage implements OnInit {

  constructor(private router: Router) { }
  goToMenuCombo(){
    this.router.navigate(['/menucombo']);
  }
  goToMenuPapita(){
    this.router.navigate(['/menupapita']);
  }

  ngOnInit() {
  }

}
