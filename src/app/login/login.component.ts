import { ServiceService } from './../service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ServiceService]
})
export class LoginComponent implements OnInit {
  numEmpleado:string;
  password:string;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  ingresar(){
    if(this.numEmpleado===''&&this.password===''){
      alert('datos vacios');
    }else if(this.numEmpleado!=='1234'&&this.password!=='contraseña'){
      alert('datos incorrectos');
    }else{
     this.router.navigateByUrl('menu');
    }
  } 
  registrar(){
    this.router.navigateByUrl('registro');
    
  }

}
