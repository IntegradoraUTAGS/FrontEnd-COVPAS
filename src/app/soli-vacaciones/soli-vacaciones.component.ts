import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soli-vacaciones',
  templateUrl: './soli-vacaciones.component.html',
  styleUrls: ['./soli-vacaciones.component.css']
})
export class SoliVacacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
