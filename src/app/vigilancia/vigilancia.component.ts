import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service'
@Component({
  selector: 'app-vigilancia',
  templateUrl: './vigilancia.component.html',
  styleUrls: ['./vigilancia.component.css']
})
export class VigilanciaComponent implements OnInit {
  pase: any = { idPersona:{}, idAutoriza:{}, _id: '' };
  idPase = "";
  observacion = "";
  kilometrosSalida = "";
  gasolinaSalida = "";
  paseSalida = "";
  nombreReviso = "";
  constructor(protected service: ServiceService) { }

  ngOnInit(): void {
  }

  terminarps() {

  }

  obtener(id: any) {

    this.service.obtenerPaseSalidaPorId(id)
      .then((data: any) => {
        this.pase = data.pase;
        console.log(this.pase)
      }).catch((err: any) => {
        console.error(err)
      })

  }

  registrar() {
    this.nombreReviso = this.pase.idPersona.strNombre;
    this.paseSalida = this.pase._id;

    this.service.registrarVigilancia(this.paseSalida, this.observacion, this.nombreReviso, this.kilometrosSalida, this.gasolinaSalida)
    .then((data) => {
      console.log(data)
      alert(data['msg'])
    }).catch((err) => {
      console.log(err)
      alert("No se pudo registrar")
    })
  }

}
