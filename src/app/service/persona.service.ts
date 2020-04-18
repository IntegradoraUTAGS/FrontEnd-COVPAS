import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = environment.urlProd;
  constructor(private http: HttpClient) { }
  obtenerPersona() {
    return this.http.get(this.url + 'persona/obtener').toPromise();
  }

}
