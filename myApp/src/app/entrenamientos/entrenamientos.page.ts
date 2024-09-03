import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.page.html',
  styleUrls: ['./entrenamientos.page.scss'],
})
export class EntrenamientosPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
  }

}
