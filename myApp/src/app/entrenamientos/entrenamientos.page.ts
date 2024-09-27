import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.page.html',
  styleUrls: ['./entrenamientos.page.scss'],
})
export class EntrenamientosPage implements OnInit {

  constructor(private menu: MenuController,
              private servicioService: ServicioService
  ) { }

  ngOnInit() {
  }

  entrenamientos : any[] = []

  getEntrenamientos(id: string) {
    return this.servicioService.getEntrenamientos(id);
  }

  getAllEntrenamientos() {
    return this.servicioService.getAllEntrenamientos();
  }

  closeMenu() {
    this.menu.close();
  }

}
