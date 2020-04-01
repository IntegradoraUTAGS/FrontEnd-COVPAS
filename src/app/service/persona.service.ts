import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  obtenerPersona() {
    return this.http.get('http://localhost:3000/persona/obtener').toPromise();
  }

}
