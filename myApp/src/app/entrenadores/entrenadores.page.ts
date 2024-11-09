import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicioService } from '../servicio.service';
import { AuthService } from '../auth.service';
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
              public authService: AuthService,
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

  closeMenu() {
    this.menu.close();
  }

  agregarAMisEntrenadores(entrenador: any) {
    this.servicioService.addToMisEntrenadores(entrenador);
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['login']);
  }
}
