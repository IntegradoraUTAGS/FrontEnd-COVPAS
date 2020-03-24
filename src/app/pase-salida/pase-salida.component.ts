import { Component, OnInit, NgModule } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Traslado } from '../models/traslado';
import { PaseSalida } from '../models/modelPasedalida';

@Component({
  selector: 'app-pase-salida',
  templateUrl: './pase-salida.component.html',
  styleUrls: ['./pase-salida.component.css'],
  providers:[ServiceService]
})
export class PaseSalidaComponent implements OnInit {
   traslados : Traslado[];
   passalida : PaseSalida;

   a:string;
   b:string;
   c:string;
   d:string;
   e:Date;
   f:Date;
   g:Date;
   h:string;
   i:string;
   j:string;
   k:string;
   l:string;
   
 

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
    
  }
  capturardir() {
    
  }

  

}
