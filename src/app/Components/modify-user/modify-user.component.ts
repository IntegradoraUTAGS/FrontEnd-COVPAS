import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ServiceService } from '../../service/service.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  informacion: any;
  status: any;
  Usuario: User = new User();
  pass: string;
  // tslint:disable-next-line: max-line-length
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  direcciones: any;
  persona: any

  constructor(public service: ServiceService, public router: Router) { }

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
  obtenerPersona(){
    let id = localStorage.getItem('idModify');


  }
  
  actualizarUsuario(myForm: NgForm) {
    this.service.registarUsuario(this.Usuario).then((usuario: any) => {
      myForm.reset();
      this.router.navigateByUrl('login');
    }).catch((err: any) => {
      console.log(err);
    });
  
  }

}
