import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PaseSalidaComponent } from './pase-salida/pase-salida.component';
import { MenuComponent } from './menu/menu.component';

const routes : Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  { path: 'pase-salida', component: PaseSalidaComponent },
  { path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
