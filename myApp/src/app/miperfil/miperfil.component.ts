import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.scss'],
})
export class MiperfilComponent implements OnInit {

  usuario: string = '';
  
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  limpiarFormulario() {
    (document.getElementById('nombre') as HTMLInputElement).value = '';
    (document.getElementById('apellido') as HTMLInputElement).value = '';
    (document.getElementById('nivelEducacional') as HTMLSelectElement).value = '';
    (document.getElementById('fechaNac') as HTMLInputElement).value = '';
  }

  mostrarDatos() {
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const nivelEducacional = (document.getElementById('nivelEducacional') as HTMLSelectElement).value;
    const fechaNac = (document.getElementById('fechaNac') as HTMLInputElement).value;
    
    this.presentAlert(nombre, apellido, nivelEducacional, fechaNac);
  }

  async presentAlert(nombre: string, apellido: string, nivelEducacional: string, fechaNac: string) {
    const html = `Nombre: ${nombre} ${apellido}<br>Nivel Educacional: ${nivelEducacional}<br>Fecha de nacimiento: ${fechaNac}`;
  
    const alert = await this.alertController.create({
      header: 'Información de Usuario',
      message: html,
      cssClass: 'alertaHome',
      buttons: [{ text: 'OK', cssClass: 'alert-button' }],
    });

    await alert.present();
  }
}
