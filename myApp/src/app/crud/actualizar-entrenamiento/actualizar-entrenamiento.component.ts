import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-entrenamiento',
  templateUrl: './actualizar-entrenamiento.component.html',
  styleUrls: ['./actualizar-entrenamiento.component.scss'],
})
export class ActualizarEntrenamientoComponent  implements OnInit {
  entrenamientos: any[] = [];
  entrenamientoId: string = '';
  entrenamientoNuevo: any = {
    nombre: "",
    descripcion: ""
  };
  entrenamientoCargado: any = {
    nombre: "",
    descripcion: ""
  };

  constructor(private menu: MenuController,
    private servicioService: ServicioService,
    private router: Router) { }

  ngOnInit(
    
  ) {
    this.cargarEntrenamientos();
  }

  editarEntrenamiento(){
    this.servicioService.actualizarEntrenamiento(this.entrenamientoId, this.entrenamientoNuevo).subscribe(
      (response) => {
        console.log('Entrenamiento editado:', response);
        this.router.navigate(['/entrenamientos']);
      },
      (error) => {
        console.error('Error al editar entrenamiento:', error);
      }
    );
  };

  cargarDatos() {
    this.entrenamientoCargado = this.entrenamientos.find(entrenamiento => entrenamiento.id === this.entrenamientoId);
    if (this.entrenamientoCargado) {
      this.entrenamientoNuevo.nombre = this.entrenamientoCargado.nombre;
      this.entrenamientoNuevo.descripcion = this.entrenamientoCargado.descripcion;
    } else {
      console.error('Entrenamiento no encontrado');
    }
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

}
