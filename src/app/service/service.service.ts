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

  Login(usuario: User) {
    return this.http.post(this.url + 'persona/login', usuario).toPromise();
  }

  obtenerUsuario() {
    return this.http.get(`${this.url}persona/obtener`).toPromise();
  }
  registarUsuario(usuario: User) {
    return this.http.post(this.url + 'persona/registrar', usuario).toPromise();

  }

  obtenerDirecciones() {
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
  registrarVacaciones(body: any) {
    return this.http.post(`${this.url}vacaciones/registrar`, body).toPromise();
  }
  actualizarDiasVacaciones(body: any, id: any) {
    return this.http.put(`${this.url}vacaciones/actualizarDias/${id}`, body).toPromise();
  }
  enviarConfirmacionVacaciones(idAutoriza: any) {
    return this.http.get(`${this.url}vacaciones/enviarConfirmacion/${idAutoriza}`).toPromise();
  }
  actualizarEstatusVacaciones(id: any, estatus: any) {
    return this.http.get(`${this.url}vacaciones/actualizar/estatus/${id}/${estatus}`).toPromise();
  }
  obtenerPorIdPersona(id: any) {
    return this.http.get(`${this.url}persona/obtener/${id}`).toPromise();
  }
  actualizarUsuario(body: any, id: any) {
    return this.http.put(`${this.url}persona/actualizar/${id}`, body).toPromise();
  }
  eliminarUsuario(id: any) {
    return this.http.delete(`${this.url}persona/eliminar/${id}`).toPromise();
  }
  agregarVehiculo(body: any) {
    return this.http.post(`${this.url}vehiculos/registrar`, body).toPromise();
  }
  obtenerVehiculo() {
    return this.http.get(`${this.url}vehiculos/obtener`).toPromise();
  }
  actualizarVehiculo(body: any, id: any) {
    return this.http.put(`${this.url}vehiculos/actualizar/${id}`, body).toPromise();
  }
  actualizarEstatusVehiculo(id: any, status: any) {
    return this.http.put(`${this.url}vehiculos/actualizar/estatus/${id}`, status).toPromise();
  }
  eliminarVehiculo(id: any) {
    return this.http.delete(`${this.url}vehiculos/eliminar/${id}`).toPromise();
  }
  obtenerVehiculoPorId(id: any) {
    return this.http.get(`${this.url}vehiculos/obtener/${id}`).toPromise();
  }

  registrarVigilancia(paseSalida: any, observacion, nombreReviso, kilometrosSalida, gasolinaSalida) {
    return this.http.post(`${this.url}paseVigilancia/registrar`, { paseSalida, observacion, nombreReviso, kilometrosSalida, gasolinaSalida }).toPromise();
  }

  registrarPaseSalidaVehiculo(body: any, id: any) {
    return this.http.post(`${this.url}paseSalidaVehiculo/registrar/${id}`, body).toPromise();
  }

}
