import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
   informacion: any;
  ngOnInit(): void {
    this.informacion = jwt_decode(localStorage.getItem('token'));
    console.log(this.informacion);
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }
  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
