import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-entrenamiento',
  templateUrl: './eliminar-entrenamiento.component.html',
  styleUrls: ['./eliminar-entrenamiento.component.scss'],
})
export class EliminarEntrenamientoComponent  implements OnInit {
  entrenamientos: any[] = [];

  constructor(private menu: MenuController,
    private servicioService: ServicioService,
    private router: Router) { }

  ngOnInit() {
    this.getAllEntrenamientos();
  }

  getAllEntrenamientos() {
    this.servicioService.getAllEntrenamientos().subscribe(
      (data: any) => {
        this.entrenamientos = data;
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
