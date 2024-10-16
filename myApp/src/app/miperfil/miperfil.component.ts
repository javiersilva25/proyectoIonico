import { Component, OnInit } from '@angular/core';
import { AlertController, IonicSafeString } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.scss'],
})
export class MiperfilComponent implements OnInit {

  usuario: string = '';
  
  constructor(public alertController: AlertController,
              private activeroute: ActivatedRoute,
              private router: Router
  ) {
    this.activeroute.queryParams.subscribe(params => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        this.usuario = navigation.extras.state['user'];
      } 

    });
  }

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

    const html = `Nombre: ${nombre} ${apellido}\nNivel Educacional: ${nivelEducacional}\nFecha de nacimiento: ${fechaNac}`;

    const alert = await this.alertController.create({
      header: 'Información de Usuario',
      message: '',
      cssClass: 'alertaHome',
      buttons: [{ text: 'OK', cssClass: 'alert-button' }],
    });
  
    alert.message = '';
    alert.innerHTML = html;
  
    await alert.present();
  }
  
}
