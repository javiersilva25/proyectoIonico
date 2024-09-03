import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-entrenadores',
  templateUrl: './entrenadores.page.html',
  styleUrls: ['./entrenadores.page.scss'],
})
export class EntrenadoresPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
  }

}
