import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import type { IonInput } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: any = {
    usuario: "",
    password: ""
  };

  usuario: string= '';

  contrasena: string = '';

  constructor(
    private alertController: AlertController, 
    private router: Router,
    private loadingController: LoadingController,
    private authService: AuthService,
    private servicioService: ServicioService
  ) {}

  ngOnInit() {}


  private token = 'tokensito98765'

  async validarLogin(model: any) {

    if (!this.validarContrasena()){
      return false;
    }
    const loading = await this.loadingUI();

    setTimeout(async () => {
      this.authService.storeToken(this.token)
      await this.navigateAfterLoading();
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

  async presentAlert(mensaje: string) {
    const msg = mensaje;

    const alert = await this.alertController.create({
      header: 'Error al iniciar sesión',
      message: msg,
      cssClass: 'alertaLogin',
      buttons: [{ text: 'OK', cssClass: 'alert-button' }],
    });

    await alert.present();
  }

  inputModel = '';

  @ViewChild('ionInputLog', { static: true }) ionInputLog!: IonInput;

  onInput(ev: Event) {
    const inputElement = ev.target as HTMLInputElement;
    const value = inputElement.value;

    const filteredValue = value.replace(/\D+/g, '');

    this.ionInputLog.value = this.inputModel = filteredValue;
  }

  async loadingUI() {
    const loading = await this.loadingController.create({
      message: "Cargando...",
      duration: 1000,
      spinner: "lines"
    });

    await loading.present();
    return loading;
  }

  private navigateAfterLoading() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.login.usuario } 
    };

    this.router.navigate(['home'], navigationExtras);
  }

  validarContrasena(){
    this.servicioService.getUsuarioNombre(this.login.usuario).subscribe(
      (data: any) => {

        if (data){
          this.usuario = data[0].password;
        }

      },
      (error) => {
        console.error('Error al obtener usuario', error);
      }
    );

    this.contrasena = btoa(this.login.password);

    if(this.contrasena === this.usuario && this.contrasena !== ''){
      console.log('ola');
      return true;
    }else{
      console.log('diablo')
      return false;
    }

  }

}
