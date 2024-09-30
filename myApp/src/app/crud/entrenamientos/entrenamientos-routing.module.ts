import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrenamientosPage } from './entrenamientos.page';
import { AgregarEntrenamientoComponent } from '../agregar-entrenamiento/agregar-entrenamiento.component';
import { EliminarEntrenamientoComponent } from '../eliminar-entrenamiento/eliminar-entrenamiento.component';
import { ActualizarEntrenamientoComponent } from '../actualizar-entrenamiento/actualizar-entrenamiento.component';

const routes: Routes = [
  {
    path: '',
    component: EntrenamientosPage,
    children:[
      {
        path:'agregar',
        component: AgregarEntrenamientoComponent
      },
      {
        path:'eliminar',
        component: EliminarEntrenamientoComponent
      },
      {
        path:'actualizar',
        component: ActualizarEntrenamientoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class EntrenamientosPageRoutingModule {}
