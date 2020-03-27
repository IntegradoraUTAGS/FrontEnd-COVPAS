import { Router } from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { PaseSalida } from '../models/modelPasedalida';
import { Traslado } from '../models/traslado';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
userLogged: boolean;
private url: string = 'http://localhost:3000/';
// registrar persona: persona/registrar
// obtener persona: persona/obtener
// registrar paseSalida: paseSalida/registrar
// actualicar destino: destinos/actualicar
// registrar vaccaciones: vacaciones/RegistarVacaciones
status: any;
  constructor(public router: Router, private http: HttpClient) { }

   Login( usuario: User ){
    return this.http.post(this.url + 'persona/login', usuario).toPromise();
  }

  obtenerUsuario(){
    return this.http.get(`${this.url}persona/obtener`).toPromise();
  }
  registarUsuario(usuario: User) {
    return this.http.post(this.url + 'persona/registrar', usuario).toPromise();

  }

  obtenerDirecciones(){
    return this.http.get(`${this.url}direcciones/obtener`).toPromise();
  }

  obtenerPaseSalidaPorId(idPaseSalida: any) {
    return this.http.get(`${this.url}paseSalida/obtener/${idPaseSalida}`).toPromise();
  }

  registrarPaseSalida(paseSalida: PaseSalida, id: any) {
    return this.http.post(`${this.url}paseSalida/registrar/${id}`, paseSalida).toPromise();
  }

  actualizarDestinos(destinos: any, idPaseSalida: any) {
    return this.http.put(`${this.url}destinos/actualizar/${idPaseSalida}`, destinos).toPromise();
  }

  enviarConfirmacionPaseSalida(idAutoriza: any) {
    return this.http.get(`${this.url}paseSalida/enviarConfirmacion/${idAutoriza}`).toPromise();
  }

  actualizarEstatusPaseSalida(id: any, estatus: any) {
    return this.http.get(`${this.url}paseSalida/actualizar/estatus/${id}/${estatus}`).toPromise();
  }

  obtenerEstatusPaseSalida(idPaseSalida: any) {
    return this.http.get(`${this.url}paseSalida/obtener/${idPaseSalida}`).toPromise();
  }
}
