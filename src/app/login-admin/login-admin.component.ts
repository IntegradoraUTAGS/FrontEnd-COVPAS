import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  usuario = new User();
  constructor(public service: ServiceService, public router: Router, private Alert: NotificationService) { }

  ngOnInit() {
  }
  ingresar(myForm: NgForm) {
    this.service.Login(this.usuario).then((usuario: any) => {
      console.log(usuario.persona);
      console.warn(usuario.token);
      myForm.reset();
      localStorage.setItem('token', usuario.token);
      if(usuario.persona.strRole == 'Admin'){
        this.router.navigateByUrl('admin');
      }
      else {
        this.Alert.showError('Este usuario no es administrador','Usuario incorrecto')
      }
    }).catch((err: any) => {
      this.Alert.showError(err.error.err.message, 'Algo salio mal' );
      console.log(err);
    });
  }
}
