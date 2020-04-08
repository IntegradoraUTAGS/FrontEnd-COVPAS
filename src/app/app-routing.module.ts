import { LoginGuard } from './guard/login.guard';
import { RegistroComponent } from './registro/registro.component';
import { SoliVacacionesComponent } from './soli-vacaciones/soli-vacaciones.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PaseSalidaComponent } from './pase-salida/pase-salida.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { CRUDAdminComponent } from './crudadmin/crudadmin.component';
import { ConfirmarPasesalidaComponent } from './Components/confirmar-pasesalida/confirmar-pasesalida.component';
import { VigilanciaComponent } from './vigilancia/vigilancia.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ConfirmarVacacionesComponent } from './components/confirmar-vacaciones/confirmar-vacaciones.component';
import { CrudvehiculosComponent } from './crudvehiculos/crudvehiculos.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'pase-salida', component: PaseSalidaComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'solivaca', component: SoliVacacionesComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'vehiculo', component: VehiculoComponent},
  { path: 'admin', component: CRUDAdminComponent },
  { path: 'confirmar-pase-salida/:id/:strEstatus', component: ConfirmarPasesalidaComponent},
  { path: 'vigilancia', component: VigilanciaComponent},
  { path: 'loginadmin', component: LoginAdminComponent },
  { path: 'home' , component: HomeComponent},
  { path: 'confirmar-vacaciones/:id/:strEstatus', component: ConfirmarVacacionesComponent},
  { path: 'crudvehiculo', component: CrudvehiculosComponent},
  { path: 'reportes', component: ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
