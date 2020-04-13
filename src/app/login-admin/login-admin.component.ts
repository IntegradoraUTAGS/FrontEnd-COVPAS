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
  usuario: string;
  pass: string;
  constructor(public service: ServiceService, public router: Router, private Alert: NotificationService) { }

  ngOnInit() {
  }
  ingresar(myForm: NgForm) {
   if (this.usuario==='root'&&this.pass==='12345678'){
     this.router.navigateByUrl('admin');
   } else {
     this.Alert.showError('El usuario y la contraseña son incorrectos','Algo salio mal');
   }
  }
}
