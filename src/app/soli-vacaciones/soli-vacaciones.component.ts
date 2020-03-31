import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ServiceService } from '../service/service.service';
import { PaseVacaciones } from '../models/modelovacaciones';
import { Router } from '@angular/router';
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
  constructor(public service: ServiceService, public router: Router) { }

  ngOnInit(){
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
    this.status = localStorage.getItem('status');
  }
  Registrarvacaciones(){

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
