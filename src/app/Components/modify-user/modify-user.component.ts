import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDAdminComponent} from '../../crudadmin/crudadmin.component';
import * as jwt_decode from 'jwt-decode';
import { ServiceService } from '../../service/service.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent {
  

  constructor() { }

  

}
