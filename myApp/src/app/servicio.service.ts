import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEntrenamientos(id: string) {
    return this.http.get(`${this.apiURL}/entrenamientos/${id}`);
  }

  getAllEntrenamientos() {
    return this.http.get(`${this.apiURL}/entrenamientos`);
  }

  getUsuario(id: string) {
    return this.http.get(`${this.apiURL}/usuarios/${id}`);
  }

  getAllUsuarios() {
    return this.http.get(`${this.apiURL}/usuarios`);
  }

  getEntrenador(id: string) {
    return this.http.get(`${this.apiURL}/entrenadores/${id}`);
  }

  getAllEntrenadores() {
    return this.http.get(`${this.apiURL}/entrenadores`);
  }
}
