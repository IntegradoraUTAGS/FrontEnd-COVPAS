import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PaseSalidaComponent } from './pase-salida/pase-salida.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ServiceService } from './service/service.service';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './Components/nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SoliVacacionesComponent } from './soli-vacaciones/soli-vacaciones.component';
import { RegistroComponent } from './registro/registro.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { CRUDAdminComponent } from './crudadmin/crudadmin.component';
import { InterceptorService } from './service/interceptor.service';
import { ConfirmarPasesalidaComponent } from './Components/confirmar-pasesalida/confirmar-pasesalida.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ModifyUserComponent } from './Components/modify-user/modify-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { VigilanciaComponent } from './vigilancia/vigilancia.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ConfirmarVacacionesComponent } from './Components/confirmar-vacaciones/confirmar-vacaciones.component';

import { CrudvehiculosComponent } from './crudvehiculos/crudvehiculos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Nav2Component } from './Components/nav2/nav2.component';
@NgModule({
  declarations: [
    AppComponent,
    PaseSalidaComponent,
    MenuComponent,
    NavComponent,
    LoginComponent,
    SoliVacacionesComponent,
    RegistroComponent,
    VehiculoComponent,
    CRUDAdminComponent,
    ConfirmarPasesalidaComponent,
    AddUserComponent,
    ModifyUserComponent,
    VigilanciaComponent,
    HomeComponent,
    LoginAdminComponent,
    ConfirmarVacacionesComponent,
    CrudvehiculosComponent,
    ReportesComponent,
    FilterPipe,
    Nav2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ServiceService, DatePipe,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
//