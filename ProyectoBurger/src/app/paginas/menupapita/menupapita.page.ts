import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-menupapita',
  templateUrl: './menupapita.page.html',
  styleUrls: ['./menupapita.page.scss'],
  standalone: false,
})
export class MenupapitaPage implements OnInit {

  productos: any[] = [];
  constructor(private router: Router, private apiService: ApiService) { }
  goToMenuBurger(){
    this.router.navigate(['/menuburger']);
  }
  goToMenuCombo(){
    this.router.navigate(['/menucombo']);
  }

  goToProductDetail(producto: any) {
        this.router.navigate(['/productdetail'], {
      state: { producto: producto }
    });
  }

  ngOnInit(): void {
  this.apiService.getDatos().subscribe(data => {
    this.productos = data;
    this.productos = this.productos.filter(item => item.tipo === 3);
  });
  }
}
