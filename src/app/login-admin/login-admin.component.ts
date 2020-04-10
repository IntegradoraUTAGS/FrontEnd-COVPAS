import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  usuario: User = new User();
  constructor(public service: ServiceService, public router: Router) { }

  ngOnInit() {
  }
  ingresar(myForm: NgForm) {
    this.service.Login(this.usuario).then((usuario: any) => {
      console.log(usuario.persona);
      console.warn(usuario.token);
      myForm.reset();
      localStorage.setItem('token', usuario.token);
      this.router.navigateByUrl('admin');
    }).catch((err: any) => {
      console.log(err);
    });
  }


}
