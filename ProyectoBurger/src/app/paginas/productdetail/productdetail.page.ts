import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
  standalone: false,
})
export class ProductdetailPage implements OnInit {
  producto: any;

  constructor(
    private router:Router,
    private cartService: CartService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras?.state?.['producto'];
  }

    agregarAlCarrito() {
    if (!this.producto) return;

    this.cartService.addToCart({
      id: this.producto.ID || this.producto.id, // asegúrate de tener un id único
      name: this.producto.Nombre,
      price: this.producto.Precio,
      quantity: 1,
      image: this.producto.RutaImagen
    });

    this.mostrarToast('Producto añadido al carrito');
  }
  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
  }
}
