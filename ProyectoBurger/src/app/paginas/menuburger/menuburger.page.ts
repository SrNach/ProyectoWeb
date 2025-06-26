import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-menuburger',
  templateUrl: './menuburger.page.html',
  styleUrls: ['./menuburger.page.scss'],
  standalone: false,
})
export class MenuburgerPage implements OnInit {
  productos: any[] = [];

  constructor(private router: Router, private apiService: ApiService) { }
  goToMenuCombo(){
    this.router.navigate(['/menucombo']);
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
  this.apiService.getMenu().subscribe((data: any) => {
    this.productos = data;
    this.productos = this.productos.filter(item => item.tipo === 2);
  });
  }
}
