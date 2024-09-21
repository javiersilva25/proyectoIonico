import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MiperfilComponent } from '../miperfil/miperfil.component';
import { MisentrenosComponent } from '../misentrenos/misentrenos.component';
import { MisentrenadoresComponent } from '../misentrenadores/misentrenadores.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'mi-perfil',
        component: MiperfilComponent
      },
      {
        path:'mis-entrenamientos',
        component: MisentrenosComponent
      },
      {
        path:'mis-entrenadores',
        component: MisentrenadoresComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
