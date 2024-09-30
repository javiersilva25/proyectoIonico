import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrenadores',
  templateUrl: './entrenadores.page.html',
  styleUrls: ['./entrenadores.page.scss'],
})
export class EntrenadoresPage implements OnInit {
  entrenadores: any[] = [];

  constructor(private menu: MenuController, 
              private servicioService: ServicioService,
              private router: Router) {}

  ngOnInit() {
    this.getAllEntrenadores();
  }

  getAllEntrenadores() {
    this.servicioService.getAllEntrenadores().subscribe(
      (data: any) => {
        this.entrenadores = data;
      },
      (error) => {
        console.error('Error al obtener entrenamientos', error);
      }
    );
  }

  async segmentChanged($event: any) {
    console.log($event.detail.value);
    let direction = $event.detail.value;
    
    this.router.navigate(['crud-entrenadores/' + direction]);
  }

  closeMenu() {
    this.menu.close();
  }
}
