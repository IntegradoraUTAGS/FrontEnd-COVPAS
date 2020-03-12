import { ServiceService } from './../service/service.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Traslado } from '../models/traslado';
import { PaseSalida } from '../models/modelPasedalida';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pase-salida',
  templateUrl: './pase-salida.component.html',
  styleUrls: ['./pase-salida.component.css'],
  providers: [ServiceService]
})
export class PaseSalidaComponent implements OnInit {
  ajsnTraslado: Traslado[];
   paseSalida: PaseSalida = new PaseSalida();

  constructor(public service: ServiceService) { }

  ngOnInit() {
    this.ajsnTraslado = [];
    this.agregar();
  }

  agregar() {
    this.ajsnTraslado.push({de: '' , a: '' });
  }
  eliminar(index: number) {
    this.ajsnTraslado.splice(index, 1);
  }
  enviar(myForm: NgForm) {
    this.service.enviarPaseSalida();

  }
 
  

}
