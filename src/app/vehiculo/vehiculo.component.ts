import { Component, OnInit } from '@angular/core';
import { Traslado } from '../models/traslado';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  traslados : Traslado[];
  e:Date;//fecha
  c:string;//nombre
  n:number;//Licencia
  p:string;//placas
 m:string;//Motivo
 f:Date;//Salida
   g:Date;//Regreso
  constructor() { }

   ngOnInit() {
    this.traslados=[];
   
    this.agregar();
    
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  agregar(){
    this.traslados.push({De:'', A:''});
  }
  eliminar(index: number){
    this.traslados.splice(index, 1)
  }

}
