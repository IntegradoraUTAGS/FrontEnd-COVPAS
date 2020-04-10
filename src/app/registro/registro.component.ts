import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { User } from '../models/user';
import { ServiceService } from '../service/service.service';
import { NotificationService } from '../service/notification.service';

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
direcciones: any;

  constructor( public service: ServiceService, public router: Router, private alert: NotificationService) { }
 
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
      this.alert.showSuccess('', 'Registrado correctamente');
      this.router.navigateByUrl('login');
    }).catch((err: any) => {
      this.alert.showError(err.error.msg, 'Algo salio mal');
      console.log(err);
    });

  }
  /*sas*/

}
