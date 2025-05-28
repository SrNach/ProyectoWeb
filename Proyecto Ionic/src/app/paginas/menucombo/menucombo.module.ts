import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucomboPageRoutingModule } from './menucombo-routing.module';

import { MenucomboPage } from './menucombo.page';
import { HeaderComponent } from 'src/app/componentes/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucomboPageRoutingModule, 
    HeaderComponent
  ],
  declarations: [MenucomboPage]
})
export class MenucomboPageModule {}
