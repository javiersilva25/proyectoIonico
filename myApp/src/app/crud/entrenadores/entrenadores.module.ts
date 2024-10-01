import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenadoresPageRoutingModule } from './entrenadores-routing.module';

import { EntrenadoresPage } from './entrenadores.page';
import { AgregarEntrenadorComponent } from '../agregar-entrenador/agregar-entrenador.component';
import { EliminarEntrenadorComponent } from '../eliminar-entrenador/eliminar-entrenador.component';
import { ActualizarEntrenadorComponent } from '../actualizar-entrenador/actualizar-entrenador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenadoresPageRoutingModule
  ],
  
  declarations: [
    EntrenadoresPage, 
    AgregarEntrenadorComponent,
    EliminarEntrenadorComponent,
    ActualizarEntrenadorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntrenadoresPageModule {}

