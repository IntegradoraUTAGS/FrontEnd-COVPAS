import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  ngOnInit(){
    
  }

  constructor(public route: Router) { }
   title = 'FrontPaseSalida';
   tipoEmpleado = 'admin';
   gotovaca(){
    this.route.navigateByUrl('soli-vacaciones');
   }
   gotopass(){
     this.route.navigateByUrl('pase-salida');
   }
   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}