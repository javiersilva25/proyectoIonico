import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-entrenadores',
  templateUrl: './entrenadores.page.html',
  styleUrls: ['./entrenadores.page.scss'],
})
export class EntrenadoresPage implements OnInit {
  entrenadores: any[] = [];

  constructor(private menu: MenuController, private servicioService: ServicioService) {}

  ngOnInit() {
    this.getAllEntrenadores();
  }

  getAllEntrenadores() {
    this.servicioService.getAllEntrenadores().subscribe(
      (data: any) => {
        this.entrenadores = data;
      },
      (error) => {
        console.error('Error al obtener entrenamientos', error);
      }
    );
  }

  closeMenu() {
    this.menu.close();
  }
}
