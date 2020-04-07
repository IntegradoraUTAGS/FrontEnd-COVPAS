import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ServiceService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudadmin',
  templateUrl: './crudadmin.component.html',
  styleUrls: ['./crudadmin.component.css']
})
export class CRUDAdminComponent implements OnInit {
  informacion: any;
  status: any;
  Usuario: User = new User();
  pass: string;
  personas: any;
  edit = false;
  // tslint:disable-next-line: max-line-length
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  direcciones: any;
  constructor(public service: ServiceService, public router: Router) {
       }
//
ngOnInit() {
  this.h();
  this.obtenerdatos();
  console.log(this.edit);
  this.obtenerPersonas();
}
h(){
  this.edit = false;
}
obtenerdatos(){
  this.status = localStorage.getItem('status');
}
obtenerPersonas() {
   this.service.obtenerUsuario().then((usuarios: any) => {
      this.personas = usuarios.cont;
      console.log(usuarios);
    }).catch((err) => {
      console.log(err);
    });
}

eliminarPersonas(id: any) {
  this.service.eliminarUsuario(id).then((resp) => {
    console.log(resp);
    this.obtenerPersonas();
  }).catch((err) => {
    console.log(err);
  })
}




editar(id) {
  localStorage.setItem('idModify', id);
  this.edit = true;
  console.log(this.edit);
}
editar2() {
  this.edit = false;
  console.log(this.edit);
}

}
