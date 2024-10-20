import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import type { IonInput } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ServicioService } from '../servicio.service';
import {NativeAudio} from '@capacitor-community/native-audio'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  async play(){
    await NativeAudio.play({
      assetId: 'error',
    });
  }

  login: any = {
    usuario: "",
    password: ""
  };

  usuario: any = '';
  contrasena: string = '';
  private token = 'tokensito98765';

  constructor(
    private alertController: AlertController, 
    private router: Router,
    private loadingController: LoadingController,
    private authService: AuthService,
    private servicioService: ServicioService,
  ) {
  }

  ngOnInit() {}

  async validarLogin() {
    if (!await this.validarContrasena()) {
      return false;
    }

    const loading = await this.loadingUI();
    
    setTimeout(async () => {
      this.authService.storeToken(this.token, this.usuario.rol);

      await this.validarRol();

      loading.dismiss();
    }, 1000);

    return true;
  }

  redireccionReestablecer() {
    this.router.navigate(['reestcontra']);
  }

  redireccionCrearCuenta() {
    this.router.navigate(['crearcuenta']);
  }

  // Método para mostrar alertas
  async presentAlert(mensaje: string) {

    this.play();

    const alert = await this.alertController.create({
      header: 'Error al iniciar sesión',
      message: mensaje,
      cssClass: 'alertaLogin',
      buttons: [{ text: 'OK', cssClass: 'alert-button' }],
    });
    await alert.present();
  }

  // Método que maneja el input
  inputModel = '';
  @ViewChild('ionInputLog', { static: true }) ionInputLog!: IonInput;

  onInput(ev: Event) {
    const inputElement = ev.target as HTMLInputElement;
    const value = inputElement.value;
    const filteredValue = value.replace(/\D+/g, '');
    this.ionInputLog.value = this.inputModel = filteredValue;
  }

  // Método para animación de carga
  async loadingUI() {
    const loading = await this.loadingController.create({
      message: "Cargando...",
      duration: 1000,
      spinner: "lines"
    });
    await loading.present();
    return loading;
  }

  async validarContrasena() {
    try {
      const data: any = await this.servicioService.getUsuarioNombre(this.login.usuario).toPromise();
      
      if (data) {
        this.usuario = data[0];
      }

      this.contrasena = btoa(this.login.password);

      if (this.contrasena === this.usuario.password && this.contrasena !== '') {
        return true;
      } else {
        await this.presentAlert('Contraseña incorrecta');
        return false;
      }
    } catch (error) {
      console.error('Error al obtener usuario', error);
      await this.presentAlert('Error al validar el usuario');
      return false;
    }
  }

  // Método para validar el rol y redirigir según el tipo de usuario
  async validarRol() {
    try {
      if (this.authService.isAdmin()) {
        this.router.navigate(['crud-entrenamientos/agregar']);
      } else if (this.usuario.rol === 'usuario') {
        this.navigateAfterLoading();
      }
    } catch (error) {
      console.error('Error al validar el rol', error);
    }
  }  

  private navigateAfterLoading() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.login.usuario } 
    };

    this.router.navigate(['home/mi-perfil'], navigationExtras);
  }
}
