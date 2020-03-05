import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Traslado } from '../models/traslado';

@Component({
  selector: 'app-pase-salida',
  templateUrl: './pase-salida.component.html',
  styleUrls: ['./pase-salida.component.css'],
  providers:[ServiceService]
})
export class PaseSalidaComponent implements OnInit {
   traslados : Traslado[];
   
   nombreP: string;
   fechaP: Date;
   departamentoP:string;
   direccionP: string;
   cargoP:string;
   horasalidaP: Date;
   horaregresoP:Date;
   nevP:string;
   asuntoP:string;
   nomperP:string;
   solicitanteP:string;
   autorizaP:string;

   ver= '';

  constructor() { }

  ngOnInit() {
    this.traslados=[];
    this.agregar();
    
  }
  agregar(){
    this.traslados.push({de:'',a:''});
  }
  eliminar(index: number){
    this.traslados.splice(index, 1)
  }
  capturardep(){
    console.log(this.departamentoP);
  }
  capturardir() {
    console.log(this.direccionP);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  

}
