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
   traslados2: any;
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
    console.log(this.traslados)
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
      this.service.actualizarDestinos(this.traslados, paseSalida._id).then((destinos: any) => {
        console.log(destinos);
      }).catch((err: any) => {
        console.log(err);
      });
    }).catch((err: any) => {
      console.log(err);
    });
  }


}
