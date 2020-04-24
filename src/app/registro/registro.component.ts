import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

@ViewChild('fileInput',{ static: false}) fileInput: ElementRef;
  constructor( public service: ServiceService, public router: Router, private alert: NotificationService) { }
 
  ngOnInit() {
    this.obtenerDirecciones();
  }
  actualizarImagen(id: any){
    const archivo: File = this.fileInput.nativeElement.files[0];
    const file = new FormData(); 
    file.set('archivo',archivo);

    this.service.actualizarLicencia(file, id).then((resp: any) => {
      console.log(resp);
    }).catch((err: any) =>{
      console.log(err);
    });
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
      this.actualizarImagen(usuario.cont._id);
      console.log(usuario.cont._id);
      myForm.reset();
      this.alert.showSuccess('', 'Registrado correctamente');
      this.router.navigateByUrl('login');
    }).catch((err: any) => {
      this.alert.showError(err.msg, 'Algo salio mal');
      console.log(err);
    });

  }
  /*sas*/

}
