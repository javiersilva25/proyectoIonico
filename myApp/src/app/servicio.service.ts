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
    'Access-Control-Allow-Origin' :'*'
    })
    }

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

    //MÉTODOS GET

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

  //MÉTODOS POST

  //ENTRENAMIENTOS

  createEntrenamiento(post: any){
    return this.http.post(this.apiURL+'/entrenamientos/',post,this.httpOptions);
  }

  eliminarEntrenamiento(id:string): Observable<any>{
    return this.http.delete(`${this.apiURL}/entrenamientos/${id}`);
  }

  actualizarEntrenamiento(id:string, entrenamiento:any):Observable<any>{
    return this.http.put(`${this.apiURL}/entrenamientos/${id}`, entrenamiento)
  }

  //ENTRENADORES

  agregarEntrenador(entrenador: any): Observable<any> {
    return this.http.post(`${this.apiURL}/entrenadores`, entrenador);
  }

  actualizarEntrenador(id:string, entrenador:any):Observable<any>{
    return this.http.put(`${this.apiURL}/entrenadores/${id}`, entrenador)
  }

  eliminarEntrenador(id:string): Observable<any>{
    return this.http.delete(`${this.apiURL}/entrenadores/${id}`)
  }

}
