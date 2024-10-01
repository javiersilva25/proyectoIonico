import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-entrenador',
  templateUrl: './actualizar-entrenador.component.html',
  styleUrls: ['./actualizar-entrenador.component.scss'],
})
export class ActualizarEntrenadorComponent  implements OnInit {

  entrenadores: any[] = [];
  entrenadorId: string = '';
  entrenadorNuevo: any = {
    nombre: "",
    especialidad: ""
  };
  entrenadorCargado: any = {
    nombre: "",
    especialidad: ""
  };

  constructor(private servicioService: ServicioService,
              private router: Router) { }

  ngOnInit(
    
  ) {
    this.cargarEntrenadores();
  }

  editarEntrenador(){
    this.servicioService.actualizarEntrenador(this.entrenadorId, this.entrenadorNuevo).subscribe(
      (response) => {
        console.log('Entrenamiento editado:', response);
        this.router.navigate(['/entrenadores']);
      },
      (error) => {
        console.error('Error al editar entrenamiento:', error);
      }
    );
  };

  cargarDatos() {
    this.entrenadorCargado = this.entrenadores.find(entrenador => entrenador.id === this.entrenadorId);
    if (this.entrenadorCargado) {
      this.entrenadorNuevo.nombre = this.entrenadorCargado.nombre;
      this.entrenadorNuevo.especialidad = this.entrenadorCargado.especialidad;
    } else {
      console.error('Entrenamiento no encontrado');
    }
  }

  cargarEntrenadores() {
    this.servicioService.getAllEntrenadores().subscribe(
      (data: any) => {
        this.entrenadores = data;
      },
      (error) => {
        console.error('Error al cargar entrenamientos', error);
      }
    );
  }

}


