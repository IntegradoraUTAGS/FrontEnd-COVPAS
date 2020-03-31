import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-crudadmin',
  templateUrl: './crudadmin.component.html',
  styleUrls: ['./crudadmin.component.css']
})
export class CRUDAdminComponent implements OnInit {
informacion: any;
status: any;
  constructor(public service: ServiceService) { }
//
ngOnInit() {
  this.informacion = jwt_decode(localStorage.getItem('token'));
  console.log(this.informacion);
  this.status = localStorage.getItem('status');
}

}
