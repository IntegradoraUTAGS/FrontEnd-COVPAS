import { Router } from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { PaseSalida } from '../models/modelPasedalida';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
userLogged: boolean;
private url: string = 'http://localhost:3000/';

  constructor(public router: Router, private http: HttpClient) { }

   Login( usuario: User ){
    return this.http.post(this.url + 'persona/login', usuario).toPromise();
  }
  enviarPaseSalida() {
    
    
  }
  registarUsuario(usuario: User) {
    return this.http.post(this.url + 'persona/registrar', usuario).toPromise();

  }



}
