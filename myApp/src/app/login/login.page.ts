import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.login.usuario);

    console.log(this.validarLogin(this.login));
  }

  validarLogin(model:any){
    if(model.usuario==""){
      return "Usuario vacio";
    }else if(model.password==""){
      return "Password vacio";
    }

    return "Campos completos";

  }
}
