import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AdminGuardService } from './adminguardservice.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then(m => m.AccessPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'reestcontra',
    loadChildren: () => import('./reestcontra/reestcontra.module').then(m => m.ReestcontraPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./crearcuenta/crearcuenta.module').then(m => m.CrearcuentaPageModule)
  },
  {
    path: 'entrenamientos',
    loadChildren: () => import('./entrenamientos/entrenamientos.module').then(m => m.EntrenamientosPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'entrenadores',
    loadChildren: () => import('./entrenadores/entrenadores.module').then(m => m.EntrenadoresPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'crud-entrenamientos',
    loadChildren: () => import('./crud/entrenamientos/entrenamientos.module').then(m => m.EntrenamientosPageModule),
    canActivate: [AdminGuardService]
  },
  {
    path: 'crud-entrenadores',
    loadChildren: () => import('./crud/entrenadores/entrenadores.module').then(m => m.EntrenadoresPageModule),
    canActivate: [AdminGuardService]
  },
  {
    path: '**',
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
