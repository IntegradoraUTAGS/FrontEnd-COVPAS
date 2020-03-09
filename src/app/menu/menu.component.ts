import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit  {


  ngOnInit(){
    
  }

  constructor(public route: Router) { }
   title = 'FrontPaseSalida';
   tipoEmpleado = 'admin';
   
   gotopass(){
    this.route.navigateByUrl('pase-salida');
  }
  gotovaca(){
    this.route.navigateByUrl('solivaca');

  }
}