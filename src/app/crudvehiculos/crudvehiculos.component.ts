import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Vehiculo } from '../models/vehiculo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crudvehiculos',
  templateUrl: './crudvehiculos.component.html',
  styleUrls: ['./crudvehiculos.component.css']
})
export class CrudvehiculosComponent implements OnInit {
  vehiculo = new Vehiculo();
  datos: any;
  

  constructor(public servie: ServiceService) { }

  ngOnInit() {
    this.mostrarVehiculos();
  }
  mostrarVehiculos() {
    this.servie.obtenerVehiculo().then((resp: any) => {
      this.datos = resp.vehiculos;
      console.log(resp);
    }).catch((err: any) => {
      console.log(err);
    });
  }
  guardarvehiculo(myForm: NgForm) {
    this.servie.agregarVehiculo(this.vehiculo).then((resp: any) => {
      console.log(resp.cont);
      myForm.reset();
      this.mostrarVehiculos();
    }).catch((err: any) => {
      console.log(err);
    });
  }
  editar(item: any) {
    localStorage.setItem('idVehiculo',item._id);
    this.vehiculo.numModelo = item.numModelo;
    this.vehiculo.strMarca = item.strMarca;
    this.vehiculo.strNIV = item.strNIV;
    this.vehiculo.strNodeMotor = item.strNodeMotor;
    this.vehiculo.strPlaca = item.strPlaca;
    this.vehiculo.strUnidad = item.strUnidad;
  }
  eliminar(id: any) {
    this.servie.eliminarVehiculo(id).then((resp: any) => {
      this.mostrarVehiculos();
    }).catch((err: any) => {
      console.log(err);
    });
  }
  actualizardatos() {
    let id = localStorage.getItem('idVehiculo');
    this.servie.actualizarVehiculo(this.vehiculo,id).then((resp: any) => {
      console.log(resp);
      this.mostrarVehiculos();
    }).catch((err: any) => {
      console.log(err);
    });
  }
  actualizarEstatus(id: any, status: any) {
    const statusObj = {
      blnEstatus: status
    };
    this.servie.actualizarEstatusVehiculo(id,statusObj).then((resp: any) => {
      this.mostrarVehiculos();
      console.log(resp);
    }).catch((err: any) =>{
      console.log(err);
    });
  }

}
