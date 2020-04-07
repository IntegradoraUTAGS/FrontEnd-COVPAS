import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDAdminComponent} from '../../crudadmin/crudadmin.component';
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
  persona: any;

  constructor(public service: ServiceService, public router: Router) { }

  @ViewChild(CRUDAdminComponent) crud: CRUDAdminComponent;
  ngOnInit() {
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
    this.status = localStorage.getItem('status');
    this.obtenerPersona();
  }
  obtenerDirecciones() {
    this.service.obtenerDirecciones().then((direccion: any) => {
      this.direcciones = direccion.cont;
      console.log(direccion);
    }).catch((err) => {
      console.log(err);
    });
  }
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
      myForm.reset();
      console.log(usuario);
      this.crud.obtenerPersonas();
    }).catch((err: any) => {
      console.log(err);
    });

  }

}
