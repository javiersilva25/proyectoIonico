import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redireccionarLogin() {
    this.router.navigate(['login']);
  }

}
