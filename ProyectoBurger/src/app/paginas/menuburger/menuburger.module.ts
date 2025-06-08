import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuburgerPageRoutingModule } from './menuburger-routing.module';

import { MenuburgerPage } from './menuburger.page';
import { HeaderComponent } from 'src/app/componentes/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuburgerPageRoutingModule,
    HeaderComponent
  ],
  declarations: [MenuburgerPage]
})
export class MenuburgerPageModule {}
