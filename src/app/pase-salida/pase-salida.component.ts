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
   trasladosDe: any;
   trasladosA: any;
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
    this.traslados = [{De: '', A: ''}];
  }
  agregar(){
    this.traslados.push({De: '', A: ''});
    console.log(this.traslados);
    for (let index = 0; index < this.traslados.length; index++) {
      const element = this.traslados[index];
    console.log(element);
    }
  }
  eliminar(index: number){
    this.traslados.splice(index, 1);
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
      for (let index = 0; index <= this.traslados.length - 1; index++) {
        const element = this.traslados[index];

        this.service.actualizarDestinos(element, paseSalida.cont._id).then((destinos: any) => {
          console.log(destinos);
        }).catch((err: any) => {
          console.log(err);
        });
      }
      this.service.enviarConfirmacionPaseSalida(paseSalida.cont._id).then((resp: any) => {
        console.log(resp);
      }).catch((err: any) => {
        console.log(err);
      });
    }).catch((err: any) => {
      console.log(err);
    });
  }


}
