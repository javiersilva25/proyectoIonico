import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-misentrenadores',
  templateUrl: './misentrenadores.component.html',
  styleUrls: ['./misentrenadores.component.scss'],
})
export class MisentrenadoresComponent implements OnInit {
  entrenadores: any[] = [];

  constructor(private servicioService: ServicioService) {}

  ngOnInit() {
    this.getMisEntrenadores();
  }

  getMisEntrenadores() {
    this.entrenadores = this.servicioService.getMisEntrenadores();
  }

  eliminarMisEntrenadores(index: number) {
    this.servicioService.eliminarMisEntrenadores(index);
    this.getMisEntrenadores();
  }
}
