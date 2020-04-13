import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service'
@Component({
  selector: 'app-vigilancia',
  templateUrl: './vigilancia.component.html',
  styleUrls: ['./vigilancia.component.css']
})
export class VigilanciaComponent implements OnInit {
  pase = {
blnRegreso: '',
dteHoraRegreso: "",
dteHoraSalida: "",
idAutoriza: {numNoEmpleado:'', strNombre: "", strEmail: "", strTipoEmpleado: "", idDireccion: ""},
idPersona: {numNoEmpleado: '', strNombre: "", strEmail: "", strTipoEmpleado: "", idDireccion: ""},
strEmpresaVisita: "",
strEstatus: "",
strMotivo: "",
strPersonaCita: "",
_id: "",
  }
  idPase= ""
  observacion =""
  kilometrosSalida=""
  gasolinaSalida=""
  constructor(protected service:ServiceService) { }

  ngOnInit(): void {
  }
  terminarps() {
    
  }
  obtener(id:any){


    this.service.obtenerPaseSalidaPorId(id).then((data)=>{
      this.pase = data['pase']
      console.log(this.pase)
    }).catch((err)=>{
      alert("Favor de ingresar un Id Valido")
    })
  }

registrar(paseSalida,observacion,nombreReviso,kilometrosSalida,gasolinaSalida){
  this.service.registrarVigilancia(paseSalida,observacion,nombreReviso,kilometrosSalida,gasolinaSalida).then((data)=>{
    console.log(data)
    alert(data['msg'])
  }).catch((err)=>{
    console.log(err)
    alert("No se pudo registrar")
  })
}

}
