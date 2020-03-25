import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { CRUDAdminComponent } from './crudadmin/crudadmin.component';
@NgModule({
  declarations: [
    AppComponent,
    PaseSalidaComponent,
    MenuComponent,
    NavComponent,
    LoginComponent,
    SoliVacacionesComponent,
    RegistroComponent,
    CRUDAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//