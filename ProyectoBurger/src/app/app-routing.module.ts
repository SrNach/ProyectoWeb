import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./paginas/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./paginas/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'menuprod',
    loadChildren: () => import('./paginas/menucombo/menucombo.module').then( m => m.MenucomboPageModule)
  },
  {
    path: 'menucombo',
    loadChildren: () => import('./paginas/menucombo/menucombo.module').then( m => m.MenucomboPageModule)
  },
  {
    path: 'menuburger',
    loadChildren: () => import('./paginas/menuburger/menuburger.module').then( m => m.MenuburgerPageModule)
  },
  {
    path: 'menupapita',
    loadChildren: () => import('./paginas/menupapita/menupapita.module').then( m => m.MenupapitaPageModule)
  },
  {
    path: 'productdetail',
    loadChildren: () => import('./paginas/productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./paginas/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
