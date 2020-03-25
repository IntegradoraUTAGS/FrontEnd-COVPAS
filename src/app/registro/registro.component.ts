import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { User } from '../models/user';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
Usuario: User = new User();
pass: string;
// tslint:disable-next-line: max-line-length
regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


  constructor( public service: ServiceService, public router: Router) { }
  direcciones: any;
  ngOnInit() {
    this.obtenerDirecciones();
  }

  obtenerDirecciones(){
    this.service.obtenerDirecciones().then((direccion: any)=>{
      this.direcciones = direccion.cont;
      console.log(direccion);
    }).catch((err)=>{
      console.log(err);
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
  /*sas*/

}
