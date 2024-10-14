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

    if (this.usuario.usuario === '' || this.usuario.correo === ''){
      await this.presentAlert('Debe completar todos los campos');
      return;
    }

    if (this.usuario.password !== this.passwordRepetir) {
      await this.presentAlert('Las contraseñas no coinciden');
      return;
    }
  
    if (this.usuario.password === "" || this.usuario.password.length !== 4) {
      await this.presentAlert('La contraseña debe tener 4 dígitos numéricos');
      return;
    }

    if (this.usuario.usuario.length < 3 || this.usuario.usuario.length > 8) {
      await this.presentAlert('El nombre de usuario debe tener entre 3 a 8 caracteres.');
      return;
  }
    
    const passwordCodificada = btoa(this.usuario.password)
    this.usuario.password = passwordCodificada

    this.agregarUsuario()
    await this.exitoAlert('Registrado con éxito')

  }
  
  async agregarUsuario() {

    try{
      const data: any = await this.servicioService.getUsuarioNombre(this.usuario.usuario).toPromise();
        
      if (this.usuario.usuario === data[0].usuario){
        await this.presentAlert('El nombre de usuario ya existe')
      }else{

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
  }catch{

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

  async exitoAlert(mensaje: string) {
    const msg = mensaje;

    const alert = await this.alert.create({
      header: 'Éxito',
      message: msg,
      cssClass: 'alertaLogin',
      buttons: [{ text: 'OK', cssClass: 'alert-button' }],
    });

    await alert.present();
  }

  redireccionLogin() {
    this.router.navigate(['login']);
  }

}