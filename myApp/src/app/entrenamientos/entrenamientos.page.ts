import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicioService } from '../servicio.service';
import { AuthService } from '../auth.service';
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
              private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
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

  closeMenu() {
    this.menu.close();
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['login']);
  }
}
