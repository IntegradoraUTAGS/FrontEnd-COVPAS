import { ServiceService } from './../service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServiceService]
})
export class LoginComponent implements OnInit {
  usuario: User = new User();

  constructor(public router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  registrar() {
    this.router.navigateByUrl('registro');
  }

  ingresar(myForm: NgForm) {  
    this.service.Login(this.usuario).then((usuario: any) => {
      console.log(usuario.msg);
      myForm.reset();
    }).catch((err: any) => {
      console.log(err);
    });
  }





}
