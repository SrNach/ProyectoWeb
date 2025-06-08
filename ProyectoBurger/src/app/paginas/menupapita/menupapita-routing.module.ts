import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenupapitaPage } from './menupapita.page';

const routes: Routes = [
  {
    path: '',
    component: MenupapitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenupapitaPageRoutingModule {}
