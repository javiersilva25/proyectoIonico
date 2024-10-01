import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-entrenamiento',
  templateUrl: './agregar-entrenamiento.component.html',
  styleUrls: ['./agregar-entrenamiento.component.scss'],
})
export class AgregarEntrenamientoComponent  implements OnInit {

  nuevoEntrenamiento = {
    nombre: '',
    descripcion: '',
  };

  constructor(private servicioService: ServicioService, private router: Router) { }

  ngOnInit() {}

  agregarEntrenamiento() {
    this.servicioService.createEntrenamiento(this.nuevoEntrenamiento).subscribe((response: any)=>{
      console.log(response);
      this.router.navigate(['/entrenamientos']);
    },error=>{
      console.log(error);
    });
  }
}
