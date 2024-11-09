import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  apiURL = 'http://localhost:3000';
  private misEntrenos: any[] = [];  // Arreglo para almacenar los entrenamientos personales

  constructor(private http: HttpClient) {}

  // MÉTODOS GET

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

  getUsuarioNombre(usuario: string){
    return this.http.get(`${this.apiURL}/usuarios?usuario=${usuario}`);
  }

  // ENTRENAMIENTOS

  createEntrenamiento(post: any) {
    return this.http.post(`${this.apiURL}/entrenamientos`, post, this.httpOptions);
  }

  eliminarEntrenamiento(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/entrenamientos/${id}`);
  }

  actualizarEntrenamiento(id: string, entrenamiento: any): Observable<any> {
    return this.http.put(`${this.apiURL}/entrenamientos/${id}`, entrenamiento);
  }

  // ENTRENADORES

  agregarEntrenador(entrenador: any): Observable<any> {
    return this.http.post(`${this.apiURL}/entrenadores`, entrenador);
  }

  actualizarEntrenador(id: string, entrenador: any): Observable<any> {
    return this.http.put(`${this.apiURL}/entrenadores/${id}`, entrenador);
  }

  eliminarEntrenador(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/entrenadores/${id}`);
  }

  // USUARIOS

  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiURL}/usuarios`, usuario);
  }

  actualizarUsuario(id: string, usuario: any): Observable<any> {
    return this.http.put(`${this.apiURL}/usuarios/${id}`, usuario);
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/usuarios/${id}`);
  }

  // MÉTODOS PARA MIS ENTRENOS

  addToMisEntrenos(entrenamiento: any) {
    this.misEntrenos.push(entrenamiento);
  }

  eliminarMisEntrenos(index: number) {
    this.misEntrenos.splice(index, 1);
  }
  getMisEntrenos() {
    return this.misEntrenos;
  }

  // MÉTODOS PARA MIS ENTRENADORES

  addToMisEntrenadores(entrenador: any) {
    this.misEntrenos.push(entrenador);
  }

  eliminarMisEntrenadores(index: number) {
    this.misEntrenos.splice(index, 1);
  }
  getMisEntrenadores() {
    return this.misEntrenos;
  }
}
