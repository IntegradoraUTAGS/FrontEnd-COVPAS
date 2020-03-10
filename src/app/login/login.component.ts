import { ServiceService } from './../service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServiceService]
})
export class LoginComponent implements OnInit {
  numEmp: string;
  pass: string;

  constructor(public router: Router, public service: ServiceService, public http: HttpClient) { }

  ngOnInit() {
  }

  registrar() {
    this.router.navigateByUrl('registro');

  }
  ingresar() {
      this.service.Login();
}





}
