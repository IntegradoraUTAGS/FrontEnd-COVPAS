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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'pase-salida', component: PaseSalidaComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'solivaca', component: SoliVacacionesComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'vehiculo', component: VehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
