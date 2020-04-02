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
  // tslint:disable-next-line: max-line-length
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  direcciones: any;
  constructor(public service: ServiceService, public router: Router) { }
//
ngOnInit() {
  this.informacion = jwt_decode(localStorage.getItem('token'));
  console.log(this.informacion);
  this.status = localStorage.getItem('status');
  this.obtenerDirecciones();
}

obtenerDirecciones(){
  this.service.obtenerDirecciones().then((direccion: any) => {
    this.direcciones = direccion.cont;
    console.log(direccion);
  }).catch((err) => {
    console.log(err);
  });
}
obtenerPersonas() {
  this.service.obtenerUsuario().then((personas: any) => {
    this.personas = personas;
  })
}

registrarUsuario(myForm: NgForm) {
  this.service.registarUsuario(this.Usuario).then((usuario: any) => {
    myForm.reset();
    this.router.navigateByUrl('login');
  }).catch((err: any) => {
    console.log(err);
  });

}
editar(id) {
  localStorage.setItem('idModify', id);
}

}
