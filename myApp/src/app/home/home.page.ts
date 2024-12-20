import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    private router: Router,
    private menu: MenuController,
    private loadingController: LoadingController,
    public authService: AuthService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.router.navigate(['home/mi-perfil'], {
        state: { user: navigation.extras.state['user'] }
      });
  }else{
    this.router.navigate(['home/mi-perfil']);
  }}

  async segmentChanged($event: any) {
    console.log($event.detail.value);
    let direction = $event.detail.value;

    
    const loading = await this.loadingUI();
    
    setTimeout(async () => {
      await direction;
      loading.dismiss();
    }, 1000);
    this.router.navigate(['home/' + direction]);
  }

  closeMenu() {
    this.menu.close();
  }

  async loadingUI() {
    const loading = await this.loadingController.create({
      message: "Cargando...",
      duration: 500,
      spinner: "lines"
    });

    await loading.present();

    return loading;
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['login']);
  }
}
