import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-menucombo',
  templateUrl: './menucombo.page.html',
  styleUrls: ['./menucombo.page.scss'],
  standalone: false,
})
export class MenucomboPage implements OnInit {
  productos: any[] = [];

  constructor(private router: Router, private apiService:ApiService) { }
  goToMenuBurger(){
    this.router.navigate(['/menuburger']);
  }
  goToMenuPapita(){
    this.router.navigate(['/menupapita']);
  }
  goToProductDetail(producto: any) {
        this.router.navigate(['/productdetail'], {
      state: { producto: producto }
    });
  }


  ngOnInit(): void {
  this.apiService.getDatos().subscribe(data => {
    this.productos = data;
    this.productos = this.productos.filter(item => item.tipo === 1);
  });
  }
}
