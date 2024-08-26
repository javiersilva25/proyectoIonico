import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  limpiarFormulario() {
    (document.getElementById('nombre') as HTMLInputElement).value = '';
    (document.getElementById('apellido') as HTMLInputElement).value = '';
    (document.getElementById('nivelEducacional') as HTMLIonSelectOptionElement).value = '';
    (document.getElementById('fechaNac') as HTMLIonDatetimeElement).value = '';
  }

  mostrarDatos() {
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const nivelEducacional = (document.getElementById('nivelEducacional') as HTMLIonSelectOptionElement).value;
    const fechaNac = (document.getElementById('fechaNac') as HTMLIonDatetimeElement).value;

    alert(`Nombre: ${nombre}\nApellido: ${apellido}\nNivel Educacional: ${nivelEducacional}\nFecha de nacimiento: ${fechaNac}`);
  }
}

