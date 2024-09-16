import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then( m => m.AccessPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reestcontra',
    loadChildren: () => import('./reestcontra/reestcontra.module').then( m => m.ReestcontraPageModule)
  },
  {
    path: 'entrenamientos',
    loadChildren: () => import('./entrenamientos/entrenamientos.module').then( m => m.EntrenamientosPageModule)
  },
  {
    path: 'entrenadores',
    loadChildren: () => import('./entrenadores/entrenadores.module').then( m => m.EntrenadoresPageModule)
  },
  {
    path: 'pagenotfound',
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then( m => m.PagenotfoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
