import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../service/service.service'
import { vigilanciaModel } from '../models/vigilanciaModel';
import { NotificationService } from '../service/notification.service';
@Component({
  selector: 'app-vigilancia',
  templateUrl: './vigilancia.component.html',
  styleUrls: ['./vigilancia.component.css']
})
export class VigilanciaComponent implements OnInit {
  vigilancia = new vigilanciaModel();
  numNoEmpleado: number;
  pase: any;
  @ViewChild('input2') input2: ElementRef;
  constructor(protected service: ServiceService,private alert:NotificationService) { }

  ngOnInit(): void {

  }

  obtener(num: number,event: Event) {
    this.service.obtenerPaseSalidaPorNumEmpleado(num).then((resp: any)=> {
      this.alert.showSuccess('Mostrando pase de salidad del empleado '+num,'Obtenido con exito');
      console.log(resp.cont);
      this.pase = resp.cont;
    }).catch((err)=>{
      this.alert.showError('Intenta de nuevo con otro numero de empleado','Ocurrio un error ')
      console.log(err);
    })
  }

  registrar() {
   this.service.registrarVigilancia(this.vigilancia).then((resp:any) =>{
     this.alert.showSuccess('Pase de salida checado con exito','Listo');
     console.log(resp);
   }).catch((err:any)=>{
     this.alert.showSuccess('Pase de salida checado','Listo');
     console.log(err);
   });
  }
}

