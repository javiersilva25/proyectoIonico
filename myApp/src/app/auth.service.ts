import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authTokenKey = "authToken";

  constructor() {}

    storeToken(token:string):void{
      const encodeToken = btoa(token);
      localStorage.setItem(this.authTokenKey, encodeToken)

    }

    isAuthenticated():boolean{
      const token = localStorage.getItem(this.authTokenKey)
      return !!token;
    }

}
