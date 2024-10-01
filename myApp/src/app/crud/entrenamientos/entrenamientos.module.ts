import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenamientosPageRoutingModule } from './entrenamientos-routing.module';

import { EntrenamientosPage } from './entrenamientos.page';
import { AgregarEntrenamientoComponent } from '../agregar-entrenamiento/agregar-entrenamiento.component';
import { EliminarEntrenamientoComponent } from '../eliminar-entrenamiento/eliminar-entrenamiento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenamientosPageRoutingModule
  ],
  declarations: [EntrenamientosPage,
    AgregarEntrenamientoComponent,
    EliminarEntrenamientoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntrenamientosPageModule {}
