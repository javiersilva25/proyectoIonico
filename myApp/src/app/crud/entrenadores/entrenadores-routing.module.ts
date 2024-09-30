import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrenadoresPage } from './entrenadores.page';
import { AgregarEntrenadorComponent } from '../agregar-entrenador/agregar-entrenador.component';
import { EliminarEntrenadorComponent } from '../eliminar-entrenador/eliminar-entrenador.component';
import { ActualizarEntrenadorComponent } from '../actualizar-entrenador/actualizar-entrenador.component';

const routes: Routes = [
  {
    path: '',
    component: EntrenadoresPage,
    children:[
      {
        path:'agregar',
        component: AgregarEntrenadorComponent
      },
      {
        path:'eliminar',
        component: EliminarEntrenadorComponent
      },
      {
        path:'actualizar',
        component: ActualizarEntrenadorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrenadoresPageRoutingModule {}
