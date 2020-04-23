
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import * as jwt_decode from 'jwt-decode';
import { paseVehiculo } from '../models/modeloPaseVehiculo';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../service/notification.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  providers: [DatePipe]
})
export class VehiculoComponent implements OnInit {
  vehiculos: any;
  paseSalida: any;
  informacion: any;
  pasevehiculo = new paseVehiculo();
  placass: any;
  personas: any;
 
  constructor(public service: ServiceService,private alert:NotificationService, private date: DatePipe, public router: Router) { }

   ngOnInit() {
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
    this.pasevehiculo.dteFechasolicitud = this.date.transform(Date.now(),'yyy-MM-dd');
    this.obtenerVehiculos();
    this.obtenerpasesalida();
    this.obtenerPersonas();
    console.log(this.placass);
  }
  mostrarPlacas(id: any) {
    this.service.obtenerVehiculoPorId(id).then((resp: any) => {
      this.placass = resp.vehiculos.strPlaca;
    }).catch((err: any) => {
      console.log(err);
    });
  }
  obtenerPersonas() {
    this.service.obtenerUsuario().then((usuarios: any) => {
       this.personas = usuarios.cont;
       console.log(usuarios);
     }).catch((err) => {
       console.log(err);
     });
 }
  obtenerVehiculos(){
    this.service.obtenerVehiculo().then((resp: any) => {
      this.vehiculos = resp.vehiculos;
      console.log(resp);
    }).catch((err: any) =>{
      console.log(err);
    });
  }
  obtenerpasesalida() {
    let id = localStorage.getItem('idPaseSalida');
    this.pasevehiculo.idPaseSalida = id;
    this.service.obtenerPaseSalidaPorId(id).then((resp: any) => {
      this.paseSalida = resp.pase;
      console.log(resp.pase);
      console.log(this.paseSalida.dteHoraSalida);
    }).catch((err: any) => {
      console.log(err);
    });
  }
  registrarPaseSalidaVehiculo(myForm:NgForm){
    let id= localStorage.getItem('idPaseSalida');
    console.log(this.pasevehiculo);
    this.service.registrarPaseSalidaVehiculo(this.pasevehiculo,id).then((resp: any) => {
      console.log(resp);
      this.alert.showSuccess('','Registrado correctamente');
      myForm.reset();
      this.router.navigateByUrl('menu');
    }).catch((err: any) => {
      console.log(err);
      this.alert.showError(err.msg,'Algo salio mal');
    });
  }


}
