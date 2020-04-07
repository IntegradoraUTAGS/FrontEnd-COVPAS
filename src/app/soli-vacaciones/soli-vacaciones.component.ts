import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ServiceService } from '../service/service.service';
import { PaseVacaciones } from '../models/modelovacaciones';
import { Router } from '@angular/router';
import { PersonaService } from '../service/persona.service';
import { Date } from '../models/fechas';
@Component({
  selector: 'app-soli-vacaciones',
  templateUrl: './soli-vacaciones.component.html',
  styleUrls: ['./soli-vacaciones.component.css']
})
export class SoliVacacionesComponent implements OnInit {
  paseVacacion = new PaseVacaciones();
  informacion: any;
  status: any;
  usuarios: any;

 fechas: Date[];
  constructor(public service: ServiceService, public router: Router) { }



  ngOnInit() {
    this.fechas = [{fecha: null}];
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
    console.log(this.paseVacacion);
    this.paseVacacion.idPersona = this.informacion.usuario._id;
    this.status = localStorage.getItem('status');
    this.obtenerUsuarios();
  }
  agregar() {
    this.fechas.push({fecha: null});
    console.log(this.fechas);
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.fechas.length; index++) {
      const element = this.fechas[index];
      console.log(element);
    }
  }
  eliminar(index: number) {
    this.fechas.splice(index, 1);
  }
  Registrarvacaciones(solicitudVacaciones: PaseVacaciones) {
    console.log(this.paseVacacion);
    this.service.registrarVacaciones(solicitudVacaciones).then((resp: any) => {
      console.log(resp);
      console.log(resp.resp._id)
      console.log(this.fechas);
      for (let index = 0; index <= this.fechas.length - 1; index++) {
       const element = this.fechas[index];
       console.log(element);
       this.service.actualizarDiasVacaciones(element, resp.resp._id).then((resp: any) => {
         console.log(resp);
       }).catch((err) => {
         console.log(err);
       });

     }
      this.service.enviarConfirmacionVacaciones(resp.resp._id).then((resp: any) => {
        console.log(resp);
      }).catch((err: any) => {
        console.log(err);
      });
    }).catch((err: any) => {
      console.log(err);
    });
  }
  obtenerUsuarios() {
    this.service.obtenerUsuario().then((usuarios: any) => {
      this.usuarios = usuarios.cont;
      console.log(usuarios);
    }).catch((err) => {
      console.log(err);
    });
  }
  logout() {
    this.router.navigateByUrl('login');
    localStorage.clear();
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

}
