import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  usuario: String = '';

  constructor(public alertController: AlertController,private activeroute: ActivatedRoute, private router: Router) {

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
    const nivelEducacional = (document.getElementById('nivelEducacional') as HTMLIonSelectElement).value;
    const fechaNac = (document.getElementById('fechaNac') as HTMLIonDatetimeElement).value;
  
    alert(`Nombre: ${nombre}\nApellido: ${apellido}\nNivel Educacional: ${nivelEducacional}\nFecha de nacimiento: ${fechaNac}`);
  }
  
}

