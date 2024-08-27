import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reestcontra',
  templateUrl: './reestcontra.page.html',
  styleUrls: ['./reestcontra.page.scss'],
})
export class ReestcontraPage implements OnInit {

  reestcontra:any={
    usuario:""
  }

  ngOnInit() {
  }

  reestablecer(model: any) {
    if (model.usuario == "" || model.usuario.length > 8 || model.usuario.length < 3) {
      this.presentAlert();
      return false;
    } 
    
    let navigationExtras: NavigationExtras = {
      state: { user: this.reestcontra.usuario }
    };
  
    this.router.navigate(['login'], navigationExtras);
    return true;
  }
  

  constructor(private alertController: AlertController, private router:Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario incorrecto',
      message: 'El usuario debe tener entre 3 a 8 caracteres',
      cssClass: 'alertaReest',
      buttons: [{text: 'OK',
      cssClass: 'alert-button'}],
      
    });

    await alert.present();
  }

}
