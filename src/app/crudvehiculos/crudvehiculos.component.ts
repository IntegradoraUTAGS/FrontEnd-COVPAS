import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Vehiculo } from '../models/vehiculo';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../service/notification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crudvehiculos',
  templateUrl: './crudvehiculos.component.html',
  styleUrls: ['./crudvehiculos.component.css']
})
export class CrudvehiculosComponent implements OnInit {
  vehiculo = new Vehiculo();
  datos: any;
  

  constructor(public servie: ServiceService, private alert: NotificationService) { }

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
      this.alert.showSuccess('', 'Registo correcto');
      this.mostrarVehiculos();
    }).catch((err: any) => {
      this.alert.showError(err.error.msg, 'Algo salio mal');
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
    Swal.fire({
      title: '¿Desea borrar el vehiculo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.servie.eliminarVehiculo(id).then((resp: any) => {
          this.mostrarVehiculos();
        }).catch((err: any) => {
          console.log(err);
        });
        Swal.fire(
          'Borrado!',
          'EL vehiculo ha sido borrado',
          'success'
        );
      }
    });  
  }
  actualizardatos() {
    let id = localStorage.getItem('idVehiculo');
    this.servie.actualizarVehiculo(this.vehiculo,id).then((resp: any) => {
      console.log(resp);
      this.mostrarVehiculos();
      this.alert.showSuccess('', 'actualizado correctamente');
    }).catch((err: any) => {
      console.log(err);
      this.alert.showError(err.error.menssage, 'Algo salio mal');
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
