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
  }
  guardarvehiculo(myForm: NgForm) {
    

  }
  editar(id: any) {

  }
  eliminar(id: any) {

  }
  actualizardatos() {
    
  }

}
