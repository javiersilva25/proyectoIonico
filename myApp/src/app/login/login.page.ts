import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
    console.log(this.login.usuario);

    console.log(this.validarLogin(this.login));
  }

  validarLogin(model:any){
    if(model.usuario=="" || model.usuario.length > 8 || model.usuario.length < 3){
      this.presentAlert();
        return "Usuario vacio";
    }else if(model.password==""){
      this.presentAlert();
      return "Password vacio";
    }

    return "Campos completos";

  }

constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

}  

