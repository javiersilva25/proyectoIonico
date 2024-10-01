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
  entrenamientoId: string = '';

  constructor(private menu: MenuController,
    private servicioService: ServicioService,
    private router: Router) { }

  ngOnInit() {
    this.cargarEntrenamientos();
  }

  cargarEntrenamientos() {
    this.servicioService.getAllEntrenamientos().subscribe(
      (data: any) => {
        this.entrenamientos = data;
      },
      (error) => {
        console.error('Error al cargar entrenamientos', error);
      }
    );
  }

  eliminarEntrenamiento() {
    if (this.entrenamientoId) {
      this.servicioService.eliminarEntrenamiento(this.entrenamientoId).subscribe(
        (response) => {
          console.log('Entrenamiento eliminado exitosamente', response);
          this.cargarEntrenamientos();
          this.router.navigate(['entrenamientos/']);
        },
        (error) => {
          console.error('Error al eliminar el entrenamiento', error);
        }
      );
    } else {
      console.error('No se ha seleccionado ningún entrenamiento');
    }
  }

  closeMenu() {
    this.menu.close();
  }

}
