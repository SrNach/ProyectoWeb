import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HeaderComponent  implements OnInit {

  @Input() signing: boolean = false;
  @Input() guest: boolean = false;
  @Input() pedido: boolean = false;
  @Input() logged: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToSignUp(){
    this.router.navigate(['/signup']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
