import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  usuario: String = '';

  constructor(public alertController: AlertController,
              private activeroute: ActivatedRoute, 
              private router: Router, 
              private menu: MenuController) {

    this.activeroute.queryParams.subscribe(params => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        this.usuario = navigation.extras.state['user'];
      }

    });
  }


  limpiarFormulario() {
    (document.getElementById('nombre') as HTMLInputElement).value = '';
    (document.getElementById('apellido') as HTMLInputElement).value = '';
    (document.getElementById('nivelEducacional') as HTMLIonSelectElement).value = '';
    (document.getElementById('fechaNac') as HTMLIonDatetimeElement).value = '';
  }

  mostrarDatos() {
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const nivelEducacional = (document.getElementById('nivelEducacional') as HTMLSelectElement).value;
    const fechaNac = (document.getElementById('fechaNac') as HTMLInputElement).value;
    this.presentAlert(nombre, apellido, nivelEducacional, fechaNac);
}

async presentAlert(nombre: string, apellido: string, nivelEducacional: string, fechaNac: string) {
  const html = `Nombre: ${nombre} ${apellido}<br>Nivel Educacional: ${nivelEducacional}<br>Fecha de nacimiento: ${fechaNac}`  
  
  const alert = await this.alertController.create({
      header: 'Información de Usuario',
      message: html,
      cssClass: 'alertaLogin',
      buttons: [{ text: 'OK', cssClass: 'alert-button' }],
    });

    await alert.present();
}

closeMenu() {
  this.menu.close();
}

}

