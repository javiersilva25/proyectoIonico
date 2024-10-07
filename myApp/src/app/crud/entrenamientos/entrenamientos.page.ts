import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.page.html',
  styleUrls: ['./entrenamientos.page.scss'],
})
export class EntrenamientosPage implements OnInit {
  entrenamientos: any[] = [];

  constructor(private menu: MenuController, 
    private servicioService: ServicioService,
    private router: Router,) {}

  ngOnInit() {
    this.router.navigate(['crud-entrenamientos/agregar']);
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

  async segmentChanged($event: any) {
    console.log($event.detail.value);
    let direction = $event.detail.value;
    
    this.router.navigate(['crud-entrenamientos/' + direction]);
  }

  closeMenu() {
    this.menu.toggle();
    console.log(this.menu.isEnabled());
  }
}
