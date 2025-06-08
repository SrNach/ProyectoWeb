import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenupapitaPageRoutingModule } from './menupapita-routing.module';

import { MenupapitaPage } from './menupapita.page';
import { HeaderComponent } from 'src/app/componentes/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenupapitaPageRoutingModule,
    HeaderComponent
  ],
  declarations: [MenupapitaPage]
})
export class MenupapitaPageModule {}
