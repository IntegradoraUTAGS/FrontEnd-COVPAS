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
import { ConfirmarVacacionesComponent } from './components/confirmar-vacaciones/confirmar-vacaciones.component';
//

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'pase-salida', component: PaseSalidaComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'solivaca', component: SoliVacacionesComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'vehiculo', component: VehiculoComponent},
  { path: 'admin', component: CRUDAdminComponent },
  { path: 'confirmar-pase-salida/:id/:strEstatus', component: ConfirmarPasesalidaComponent},
  { path: 'confirmar-vacaciones/:id/:strEstatus', component: ConfirmarVacacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
