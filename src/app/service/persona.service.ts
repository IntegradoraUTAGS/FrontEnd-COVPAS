import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = environment.urlProd;
  constructor(private http: HttpClient) { }
  // Funcion para obtener persona enviando peticion al backend por medio de http
  obtenerPersona() {
    return this.http.get(this.url + 'persona/obtener').toPromise();
  }

}
