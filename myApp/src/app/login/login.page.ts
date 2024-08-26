import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import type { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  login:any={
    usuario:"",
    password:""
  }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.validarLogin(this.login));
  }

  validarLogin(model:any){
    if(model.usuario=="" || model.usuario.length > 8 || model.usuario.length < 3){
      this.presentAlert();
    }else if(model.password=="" || model.password.length != 4){
      this.presentAlert();
    }
  }

constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error al iniciar sesión',
      message: 'Usuario o contraseña incorrectos',
      cssClass: 'alertaLogin',
      buttons: [{text: 'OK',
      cssClass: 'alert-button'}],
      
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

}  


