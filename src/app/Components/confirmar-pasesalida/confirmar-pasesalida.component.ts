import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-confirmar-pasesalida',
  templateUrl: './confirmar-pasesalida.component.html',
  styleUrls: ['./confirmar-pasesalida.component.css']
})
export class ConfirmarPasesalidaComponent implements OnInit {

  constructor(public route: ActivatedRoute, public service: ServiceService ) { }
  id: any;
  status: string;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.id = params.get('id');
      this.status = params.get('strEstatus');
      localStorage.setItem('status',this.status);
      this.service.actualizarEstatusPaseSalida(this.id, this.service.status).then((resp: any) => {
        console.log(resp);
      }).catch((err: any) => {
        console.log(err);
      });
      console.log(this.id, this.status);

    });
  }

}
