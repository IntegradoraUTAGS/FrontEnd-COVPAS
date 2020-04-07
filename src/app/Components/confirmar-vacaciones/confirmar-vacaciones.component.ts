import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-vacaciones',
  templateUrl: './confirmar-vacaciones.component.html',
  styleUrls: ['./confirmar-vacaciones.component.css']
})
export class ConfirmarVacacionesComponent implements OnInit {

  constructor(public route: ActivatedRoute, public service: ServiceService ) { }
  id: any;
  status: string;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.id = params.get('id');
      this.status = params.get('strEstatus');
      localStorage.setItem('status',this.status);
      this.service.actualizarEstatusVacaciones(this.id, this.status).then((resp: any) => {
        console.log(resp);
      }).catch((err: any) => {
        console.log(err);
      });
      console.log(this.id, this.status);

    });
  }

}
