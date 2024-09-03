import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestcontraPageRoutingModule } from './reestcontra-routing.module';

import { ReestcontraPage } from './reestcontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestcontraPageRoutingModule
  ],
  declarations: [ReestcontraPage]
})
export class ReestcontraPageModule {}
