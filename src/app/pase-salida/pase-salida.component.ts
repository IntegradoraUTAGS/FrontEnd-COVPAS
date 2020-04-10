import { Component, OnInit, NgModule } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Traslado } from '../models/traslado';
import { PaseSalida } from '../models/modelPasedalida';
import { NgForm } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-pase-salida',
  templateUrl: './pase-salida.component.html',
  styleUrls: ['./pase-salida.component.css'],
  providers: [ServiceService]
})
export class PaseSalidaComponent implements OnInit {
   traslados: Traslado[];
   passalida: PaseSalida = new PaseSalida();
   informacion: any;
   usuarios: any;
  constructor(public service: ServiceService, private alert: NotificationService) { }
 
  ngOnInit() {
    this.obtenerUsuarios();
    this.traslados = [{De: '', A: ''}];
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
    this.passalida.idPersona = this.informacion.usuario._id;
    console.log(this.passalida.idPersona = this.informacion.usuario._id);
  }
  agregar() {
    this.traslados.push({De: '', A: ''});
    console.log(this.traslados);
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.traslados.length; index++) {
      const element = this.traslados[index];
      console.log(element);
    }
  }
  eliminar(index: number) {
    this.traslados.splice(index, 1);
  }
  capturardep() {
    console.log(this.traslados);

  }
  obtenerUsuarios() {
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
      localStorage.setItem('idPaseSalida', paseSalida.cont._id);
      myform.reset();
      this.alert.showSuccess('', 'Registro exitoso');

      this.service.obtenerEstatusPaseSalida(paseSalida.cont._id).then((resp: any) => {
        console.log(resp);
        localStorage.setItem('status', resp.pase.strEstatus);
      }).catch((err: any) => {
        this.alert.showError('Obtener estatus fallo', 'Algo salio mal');
        console.log(err);
      });
      for (let index = 0; index <= this.traslados.length - 1; index++) {
        const element = this.traslados[index];

        this.service.actualizarDestinos(element, paseSalida.cont._id).then((destinos: any) => {
          console.log(destinos);
        }).catch((err: any) => {
          this.alert.showError('Actualizar destinos fallo', 'Algo salio mal');
          console.log(err);
        });
      }
      this.service.enviarConfirmacionPaseSalida(paseSalida.cont._id).then((resp: any) => {
        console.log(resp);
      }).catch((err: any) => {
        this.alert.showError('Enviar confirmación fallo', 'Algo salio mal');
        console.log(err);
      });
    }).catch((err: any) => {
      console.log(err);
      this.alert.showError('Registro fallo ', 'Algo salio mal');
    });
  }


}
