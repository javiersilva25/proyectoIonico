import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

  constructor(private router: Router,
              private alert: AlertController,
              private servicioService: ServicioService ) { }

  ngOnInit() {
  }

  usuario: any = {
    usuario: "",
    correo: "",
    password: "",
    rol: "usuario"
  };

  passwordRepetir:string = ""

  async crearCuenta() {
    if (this.usuario.password !== this.passwordRepetir) {
      await this.presentAlert('Las contraseñas no coinciden');
      return;
    }
  
    if (this.usuario.password === "" || this.usuario.password.length !== 4) {
      await this.presentAlert('La contraseña debe tener 4 dígitos numéricos');
      return;
    }
    
    const passwordCodificada = btoa(this.usuario.password)
    this.usuario.password = passwordCodificada

    this.agregarUsuario()

  }
  
  agregarUsuario() {
    this.servicioService.agregarUsuario(this.usuario).subscribe(
      (response) => {
        console.log('Usuario agregado:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al agregar usuario:', error);
      }
    );

}
  async presentAlert(mensaje: string) {
    const msg = mensaje;

    const alert = await this.alert.create({
      header: 'Error al crear cuenta',
      message: msg,
      cssClass: 'alertaLogin',
      buttons: [{ text: 'OK', cssClass: 'alert-button' }],
    });

    await alert.present();
}
}