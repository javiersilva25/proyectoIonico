import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-entrenador',
  templateUrl: './agregar-entrenador.component.html',
  styleUrls: ['./agregar-entrenador.component.scss'],
})
export class AgregarEntrenadorComponent implements OnInit {
  nuevoEntrenador = {
    nombre: '',
    especialidad: ''
  };

  constructor(private servicioService: ServicioService, private router: Router) { }

  ngOnInit() {}

  agregarEntrenador() {
    this.servicioService.agregarEntrenador(this.nuevoEntrenador).subscribe(
      (response) => {
        console.log('Entrenador agregado:', response);
        this.router.navigate(['/entrenadores']);
      },
      (error) => {
        console.error('Error al agregar entrenador:', error);
      }
    );
  }
}
