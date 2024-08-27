import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReestcontraPage } from './reestcontra.page';

const routes: Routes = [
  {
    path: '',
    component: ReestcontraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReestcontraPageRoutingModule {}
