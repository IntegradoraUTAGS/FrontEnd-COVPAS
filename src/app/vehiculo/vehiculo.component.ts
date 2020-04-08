
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import * as jwt_decode from 'jwt-decode';
import { paseVehiculo } from '../models/modeloPaseVehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculos: any;
  paseSalida: any;
  informacion: any;
  pasevehiculo = new paseVehiculo();
  placass: any;
  e:Date;//fecha
  c:string;//nombre
  n:number;//Licencia
  p:string;//placas
 m:string;//Motivo
 f:Date;//Salida
   g:Date;//Regreso
   o:String;//Observacion
  datePipe: any;
 
  constructor(public service: ServiceService) { }

   ngOnInit() {
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
    this.pasevehiculo.dteFechasolicitud = Date.now().toString();
    this.pasevehiculo.dteFechasolicitud.substring(0,10);
    console.log(this.pasevehiculo.dteFechasolicitud);
    this.obtenerVehiculos();
    this.obtenerpasesalida();
    console.log(this.placass);
  }
  mostrarPlacas(id: any) {
    this.service.obtenerVehiculoPorId(id).then((resp: any) => {
      this.placass = resp.vehiculos.strPlaca;
    }).catch((err: any) => {
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
  
  

}
