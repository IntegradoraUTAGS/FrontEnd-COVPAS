import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ServiceService } from '../service/service.service';
import { PaseVacaciones } from '../models/modelovacaciones';
import { Router } from '@angular/router';
import { PersonaService } from '../service/persona.service';
import { Date } from '../models/fechas';
import { NotificationService } from '../service/notification.service';
import { NgForm } from '@angular/forms';
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
  date: Date;
  days:  Array<any> = [];
  i=0;
 fechas: Date[];
  constructor(public service: ServiceService, public router: Router, private alert: NotificationService) { }



  ngOnInit() {
    this.fechas = [{fecha: null}];
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
    console.log(this.paseVacacion);
    this.paseVacacion.idPersona = this.informacion.usuario._id;
    this.status = localStorage.getItem('status');
    this.obtenerUsuarios();
  }
  diasArray(){
    if(this.informacion.usuario.numDiasDisponibles <= this.days.length){
      this.alert.showWarning('Parece que no tienes dias suficientes','Oops');
    }
    else {
    this.days[this.i] = this.date;
    this.i++;
    this.date=null;
    console.log(this.days);
    }
  }
  eliminar(index) {
    console.log(index);
    this.days.splice(index, 1);

    
  }
  Registrarvacaciones(myForm: NgForm) {
    if(this.days.length==0){
      this.alert.showWarning('Agrega días','No selecionaste días!');
    }
   else {
     this.paseVacacion.adteFechas = this.days;
     let diasRestantes = this.informacion.usuario.numDiasDiasponibles - this.paseVacacion.adteFechas.length;
     this.service.registrarVacaciones(this.paseVacacion).then((resp:any)=>{
       myForm.reset();
       this.alert.showSuccess('','Enviada solicitud de vacacion')
       console.log(resp)
       this.service.actualizarDiasVacaciones({numDiasDisponibles: diasRestantes},this.informacion.usuario._id).then((resp:any)=>{
         console.log(resp);
       }).catch((err: any)=>{
         console.log(err);
       });
       this.router.navigateByUrl('menu');
     }).catch((err: any) => {
       this.alert.showError(err.err.msg,'Error');
     })
   }
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
    this.router.navigateByUrl('home');
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
