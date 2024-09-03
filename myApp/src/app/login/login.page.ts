import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import type { IonInput } from '@ionic/angular';

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

  constructor(
    private alertController: AlertController, 
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}


  async validarLogin(model: any) {
    if (model.usuario === "" || model.usuario.length > 8 || model.usuario.length < 3) {
      await this.presentAlert();
      return false;
    } else if (model.password === "" || model.password.length !== 4) {
      await this.presentAlert();
      return false;
    }

    const loading = await this.loadingUI();

    setTimeout(() => {
      this.navigateAfterLoading();
      loading.dismiss();
    }, 2000);

    return true;
  }

  redireccionReestablecer() {
    this.router.navigate(['reestcontra']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error al iniciar sesión',
      message: 'Usuario o contraseña incorrectos',
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
      duration: 5000,
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
}
