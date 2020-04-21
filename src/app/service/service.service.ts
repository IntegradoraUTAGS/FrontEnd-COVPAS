import { Router } from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { PaseSalida } from '../models/modelPasedalida';
import { Traslado } from '../models/traslado';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userLogged: boolean;
  url = environment.urlProd;
  // registrar persona: persona/registrar
  // obtener persona: persona/obtener
  // registrar paseSalida: paseSalida/registrar
  // actualicar destino: destinos/actualicar
  // registrar vaccaciones: vacaciones/RegistarVacaciones
  status: any;
  constructor(public router: Router, private http: HttpClient) { }

  // Funcion que envia peticion de login al servidor por medio de http
  // y enviando los datos del usuario drectamente del frontend
  Login(usuario: User) {
    return this.http.post(this.url + 'persona/login', usuario).toPromise();
  }
// Funcion para obtener usuarios enviando peticion http al servidor
  obtenerUsuario() {
    return this.http.get(`${this.url}persona/obtener`).toPromise();
  }
  // Registrar un nuevo usuario enviandole los datos de un usuario por medio de http
  registarUsuario(usuario: User) {
    return this.http.post(this.url + 'persona/registrar', usuario).toPromise();

  }
// obtener las direcciones academicas disponibles por medio de http
  obtenerDirecciones() {
    return this.http.get(`${this.url}direcciones/obtener`).toPromise();
  }
// obtener un pase de salida filtrado por id enviando como parametro un id por medio de http
  obtenerPaseSalidaPorId(idPaseSalida: any) {
    return this.http.get(`${this.url}paseSalida/obtener/${idPaseSalida}`).toPromise();
  }
// Registrar un pase de salida enviandole como parametro el id de la persona registrada y un objeto
// tomado del frontend con los datos del pase de salida
  registrarPaseSalida(paseSalida: PaseSalida, id: any) {
    return this.http.post(`${this.url}paseSalida/registrar/${id}`, paseSalida).toPromise();
  }
// Actualizar los destinos del pase de salida enviando como paremetro los destinos y el id del pase
  actualizarDestinos(destinos: any, idPaseSalida: any) {
    return this.http.put(`${this.url}destinos/actualizar/${idPaseSalida}`, destinos).toPromise();
  }
// enviar confirmacion por correo utilizando el id de la persona que atoriza para enviar los datos al servidor
  enviarConfirmacionPaseSalida(idAutoriza: any) {
    return this.http.get(`${this.url}paseSalida/enviarConfirmacion/${idAutoriza}`).toPromise();
  }
// Actualizar el estats del pase de salida solicitando el estatus y el id del pase
// enviando la peticion por medio de http
  actualizarEstatusPaseSalida(id: any, estatus: any) {
    return this.http.get(`${this.url}paseSalida/actualizar/estatus/${id}/${estatus}`).toPromise();
  }
// obtener el estatus actual del pase de salida
  obtenerEstatusPaseSalida(idPaseSalida: any) {
    return this.http.get(`${this.url}paseSalida/obtener/${idPaseSalida}`).toPromise();
  }
  // registrar una solicitud de vacaciones solicitando el body del frontend
  registrarVacaciones(body: any) {
    return this.http.post(`${this.url}vacaciones/registrar`, body).toPromise();
  }
  // actualizar los dias disponibles de la persona en el servidor
  actualizarDiasVacaciones(body: any, id: any) {
    return this.http.put(`${this.url}vacaciones/actualizarDias/${id}`, body).toPromise();
  }
  // enviar confirmacion de vacaciones por correo, solicitando el id de la persona que autoriza
  enviarConfirmacionVacaciones(idAutoriza: any) {
    return this.http.get(`${this.url}vacaciones/enviarConfirmacion/${idAutoriza}`).toPromise();
  }
  // Actualizar el esatus de la solicitud de vacaciones solicitando el id y el estatus a cambiar
  actualizarEstatusVacaciones(id: any, estatus: any) {
    return this.http.get(`${this.url}vacaciones/actualizar/estatus/${id}/${estatus}`).toPromise();
  }
  // obtener una persona especifica solocitando su id
  obtenerPorIdPersona(id: any) {
    return this.http.get(`${this.url}persona/obtener/${id}`).toPromise();
  }
  // actualizar un usuario solicitando el id y el body con los datos a actualizar
  actualizarUsuario(body: any, id: any) {
    return this.http.put(`${this.url}persona/actualizar/${id}`, body).toPromise();
  }
  // eliminar logicamente un usuario con solo el id
  eliminarUsuario(id: any) {
    return this.http.delete(`${this.url}persona/eliminar/${id}`).toPromise();
  }
  // agregar un vehiculo solicitando los datos del body del frontend
  agregarVehiculo(body: any) {
    return this.http.post(`${this.url}vehiculos/registrar`, body).toPromise();
  }
  // obtener todos los vehiculos disponibles enviando la peticion por http al servidor
  obtenerVehiculo() {
    return this.http.get(`${this.url}vehiculos/obtener`).toPromise();
  }
  // actualizar el vehiculo solicitando el id y el body del frontend
  actualizarVehiculo(body: any, id: any) {
    return this.http.put(`${this.url}vehiculos/actualizar/${id}`, body).toPromise();
  }
  // actualizar el estatus del vehiculo
  actualizarEstatusVehiculo(id: any, status: any) {
    return this.http.put(`${this.url}vehiculos/actualizar/estatus/${id}`, status).toPromise();
  }
  // eliminar logicamente el vehiculo solicitando el id
  eliminarVehiculo(id: any) {
    return this.http.delete(`${this.url}vehiculos/eliminar/${id}`).toPromise();
  }
  // obtener un vehiculo por id
  obtenerVehiculoPorId(id: any) {
    return this.http.get(`${this.url}vehiculos/obtener/${id}`).toPromise();
  }
// registrar u
  registrarVigilancia(paseSalida: any, observacion, nombreReviso, kilometrosSalida, gasolinaSalida) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.url}paseVigilancia/registrar`, { paseSalida, observacion, nombreReviso, kilometrosSalida, gasolinaSalida }).toPromise();
  }

  registrarPaseSalidaVehiculo(body: any, id: any) {
    return this.http.post(`${this.url}paseSalidaVehiculo/registrar/${id}`, body).toPromise();
  }

  obtenerPaseSalidaVehiculoPorNumEmpleado(num: any){
    return this.http.get(`${this.url}paseSalidaVehiculo/obtener/${num}`).toPromise();
  }

}
