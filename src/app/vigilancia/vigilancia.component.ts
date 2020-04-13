import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service'
@Component({
  selector: 'app-vigilancia',
  templateUrl: './vigilancia.component.html',
  styleUrls: ['./vigilancia.component.css']
})
export class VigilanciaComponent implements OnInit {
  pase: any;
  idPase: string;
  observacion = "";
  kilometrosSalida = "";
  gasolinaSalida = "";
  paseSalida: any;
  nombreReviso = "";
  persona: any;
  constructor(protected service: ServiceService) { }

  ngOnInit(): void {
  }

  terminarps() {

  }

  obtener(num: any) {
    this.service.obtenerPaseSalidaVehiculoPorNumEmpleado(num)
      .then((data: any) => {
        this.pase = data.cont;
        this.service.obtenerPaseSalidaPorId(data.cont.idPaseSalida._id).then((resp: any)  => {
            console.log(resp)
            this.paseSalida = resp.pase;
            this.persona = resp.pase.idPersona;
        }).catch((err: any) => {
          console.log(err);
        });
        console.log(this.pase);
      }).catch((err: any) => {
        console.error(err);
      });
  }

  registrar() {
    this.paseSalida._id = this.pase._id;
    console.log(this.nombreReviso);
    this.service.registrarVigilancia(this.paseSalida._id, this.observacion,this.nombreReviso, this.kilometrosSalida, this.gasolinaSalida)
    .then((data: any) => {
      console.log(data);
      alert(data['msg']);
    }).catch((err: any) => {
      console.log(err)
      alert('No se pudo registrar');
    });
  }
}

