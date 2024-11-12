import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-misentrenos',
  templateUrl: './misentrenos.component.html',
  styleUrls: ['./misentrenos.component.scss'],
})
export class MisentrenosComponent implements OnInit {
  entrenamientos: any[] = [];

  constructor(private servicioService: ServicioService) {}

  ngOnInit() {
    this.getMisEntrenos();
  }

  getMisEntrenos() {
    this.entrenamientos = this.servicioService.getMisEntrenos();
  }

  eliminarMiEntreno(index: number) {
    this.servicioService.eliminarMisEntrenos(index);
    this.getMisEntrenos(); // Refresca la lista después de eliminar
  }
}
