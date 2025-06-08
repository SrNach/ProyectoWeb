import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenucomboPage } from './menucombo.page';

const routes: Routes = [
  {
    path: '',
    component: MenucomboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucomboPageRoutingModule {}
