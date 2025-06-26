import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
  standalone: false
})
export class CompraPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']); }, 6000);
  }

}
