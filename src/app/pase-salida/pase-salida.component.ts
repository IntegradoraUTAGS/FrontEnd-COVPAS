import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-pase-salida',
  templateUrl: './pase-salida.component.html',
  styleUrls: ['./pase-salida.component.css'],
  providers:[ServiceService]
})
export class PaseSalidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
