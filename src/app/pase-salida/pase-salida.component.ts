import { Component, OnInit, NgModule } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Traslado } from '../models/traslado';
import { PaseSalida } from '../models/modelPasedalida';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pase-salida',
  templateUrl: './pase-salida.component.html',
  styleUrls: ['./pase-salida.component.css'],
  providers:[ServiceService]
})
export class PaseSalidaComponent implements OnInit {
   traslados: Traslado[];
   passalida: PaseSalida = new PaseSalida();

   usuarios: any;
   a: string;
   b: string;
   c: string;
   d: string;
   e: Date;
   f: Date;
   g: Date;
   h: string;
   i: string;
   j: string;
   k: string;
   l: string;

  constructor(public service: ServiceService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }
  agregar(){
    this.traslados.push({de: '', a: ''});
  }
  eliminar(index: number){
    this.traslados.splice(index, 1)
  }
  capturardep(){
    console.log(this.traslados);
    
  }
  capturardir() {
    
  }

  obtenerUsuarios(){
    this.service.obtenerUsuario().then((usuarios: any) => {
      this.usuarios = usuarios.cont;
      console.log(usuarios);
    }).catch((err) => {
      console.log(err);
    });
  }

  registrarPaseSalida(myform: NgForm, id: any) {
    this.service.registrarPaseSalida(this.passalida, id).then((paseSalida: any) => {
      console.log(paseSalida);
    }).catch((err) => {
      console.log(err);
    });
  }
  

}
