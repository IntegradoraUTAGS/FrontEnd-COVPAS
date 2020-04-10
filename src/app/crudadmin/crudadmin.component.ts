import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ServiceService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';

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
  persona: any;
  constructor(public service: ServiceService, public router: Router, private alert: NotificationService) {
       }

ngOnInit() {
  this.edit = false;
  this.status = localStorage.getItem('status');
  console.log(this.edit);
  this.obtenerPersonas();
  this.obtenerPersona();
  this.obtenerDirecciones();
}
gotoreportes(){
  this.router.navigateByUrl('reportes');
}
gotocrudvehiculos() {
  this.router.navigateByUrl('crudvehiculo');
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
  });
}

editar(id) {
  localStorage.setItem('idModify', id);
  this.edit = true;
  this.obtenerPersona();
  console.log(this.edit);
}
editar2() {
  this.edit = false;
  console.log(this.edit);
}
//Agregar un usuario
obtenerDirecciones(){
  this.service.obtenerDirecciones().then((direccion: any) => {
    this.direcciones = direccion.cont;
    console.log(direccion);
  }).catch((err) => {
    console.log(err);
  });
}

registrarUsuario(myForm: NgForm) {
  this.service.registarUsuario(this.Usuario).then((usuario: any) => {
    console.log(usuario);
    myForm.reset();
    this.alert.showSuccess('', 'Registro Correcto');
  }).catch((err: any) => {
    console.log(err);
    this.alert.showError(err.error.msg, 'Algo salio mal');
  });
}
//Actualizar usuario
obtenerPersona(){
  let id = localStorage.getItem('idModify');
  this.service.obtenerPorIdPersona(id).then((resp: any) => {
    console.log(resp);
    this.persona = resp.resp;
    console.log(this.persona.numNoEmpleado);
    localStorage.setItem('idModify', '');
  }).catch((err: any) => {
    console.log(err);
  });
}

actualizarUsuario(myForm: NgForm, id: any) {
  const personita = {
    strTipoEmpleado: this.persona.strTipoEmpleado,
    numDiasDisponibles: this.persona.numDiasDisponibles
  }
  this.service.actualizarUsuario(personita, id).then((usuario: any) => {
    console.log(usuario);
    this.obtenerPersonas();
    this.alert.showSuccess('', 'Persona actualizada');
    myForm.reset();
  }).catch((err: any) => {
    console.log(err);
    this.alert.showError(err.error.menssage, 'Algo salio mal');
  });

}

}
