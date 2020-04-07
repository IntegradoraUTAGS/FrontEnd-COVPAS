import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit  {
informacion: any;

status: any;
  ngOnInit() {
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
    this.status = localStorage.getItem('status');
  }

  constructor(public route: Router) { }
   
   gotopass() {
    this.route.navigateByUrl('pase-salida');
  }
  gotovaca() {
    this.route.navigateByUrl('solivaca');
  }
  gotovehiculo() {
    this.route.navigateByUrl('vehiculo');
  }
}