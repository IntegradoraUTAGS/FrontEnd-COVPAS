import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ServiceService } from '../service/service.service';
import { PaseVacaciones } from '../models/modelovacaciones';
import { Router } from '@angular/router';
import { PersonaService } from '../service/persona.service';
@Component({
  selector: 'app-soli-vacaciones',
  templateUrl: './soli-vacaciones.component.html',
  styleUrls: ['./soli-vacaciones.component.css']
})
export class SoliVacacionesComponent implements OnInit {
  paseVacacion = new PaseVacaciones();
  informacion: any;
  status: any;
  personas: any[] = [];
  usuarios: any;
  arrDate: Date[];
  constructor(public service: ServiceService, public router: Router, private personaService: PersonaService) { }

  ngOnInit(){
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
    this.paseVacacion.idPersona = this.informacion._id;
    this.status = localStorage.getItem('status');

    this.personaService.obtenerPersona().then((resp: any) => {
      console.log(resp)
      this.personas = resp.cont;
      console.log(this.personas);

    }).catch((err) => {

    })
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
