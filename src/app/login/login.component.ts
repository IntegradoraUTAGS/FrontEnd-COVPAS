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
  email:string;
  password:string;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  ingresar(){
     this.router.navigateByUrl('menu');
  } 
  registrar(){
    
  }

}
