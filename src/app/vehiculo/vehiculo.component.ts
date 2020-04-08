
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

  e:Date;//fecha
  c:string;//nombre
  n:number;//Licencia
  p:string;//placas
 m:string;//Motivo
 f:Date;//Salida
   g:Date;//Regreso
   o:String;//Observacion
 
  constructor(public service: ServiceService) { }

   ngOnInit() {
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);

  }
  obtenerVehiculos(){

  }
  obtenerpasesalida() {
    
  }
  
  

}
