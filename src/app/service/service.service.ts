import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
userLogged: boolean;
  constructor(public router: Router, private http: HttpClient) { }

   Login( usuario:User ){
    this.http.post('http://localhost:3000/persona/login',usuario).toPromise();
  }



}
