import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
  standalone: false,
})
export class ProductdetailPage implements OnInit {
  producto: any;

  constructor(private router:Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras?.state?.['producto'];
  }
}
