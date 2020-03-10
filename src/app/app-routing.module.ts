import { LoginGuard } from './guard/login.guard';
import { RegistroComponent } from './registro/registro.component';
import { SoliVacacionesComponent } from './soli-vacaciones/soli-vacaciones.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PaseSalidaComponent } from './pase-salida/pase-salida.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'pase-salida', component: PaseSalidaComponent, canActivate: [LoginGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [LoginGuard]},
  { path: 'login' , component: LoginComponent},
  { path: 'solivaca', component: SoliVacacionesComponent, canActivate: [LoginGuard]},
  { path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
