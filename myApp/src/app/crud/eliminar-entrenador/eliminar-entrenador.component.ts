import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-entrenador',
  templateUrl: './eliminar-entrenador.component.html',
  styleUrls: ['./eliminar-entrenador.component.scss'],
})
export class EliminarEntrenadorComponent implements OnInit {
  entrenadores: any[] = [];
  entrenadorSeleccionadoId: string = '';

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarEntrenadores();
  }

  cargarEntrenadores() {
    this.servicioService.getAllEntrenadores().subscribe(
      (data: any) => {
        this.entrenadores = data;
      },
      (error) => {
        console.error('Error al cargar entrenadores', error);
      }
    );
  }

  eliminarEntrenador() {
    if (this.entrenadorSeleccionadoId) {
      this.servicioService.eliminarEntrenador(this.entrenadorSeleccionadoId).subscribe(
        (response) => {
          console.log('Entrenador eliminado exitosamente', response);
          this.router.navigate(['/entrenadores']);
        },
        (error) => {
          console.error('Error al eliminar el entrenador', error);
        }
      );
    } else {
      console.error('No se ha seleccionado ningún entrenador');
    }
  }
}
