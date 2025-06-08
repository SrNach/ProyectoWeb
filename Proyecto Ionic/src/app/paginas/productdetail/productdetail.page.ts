import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
  standalone: false,
})
export class ProductdetailPage implements OnInit {
  imagePath: string = 'assets/img/burgers/combo1.JPG';
  productName: string = 'Delicious Burger';
  productDescription: string = 'A tasty burger with fresh ingredients and a secret sauce.';
  productPrice: number = 9.99;

  constructor() { }

  ngOnInit() {
  }
}
