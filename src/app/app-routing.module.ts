import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PaseSalidaComponent } from './pase-salida/pase-salida.component';

const routes : Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pase-salida' },
  { path: 'pase-salida', component: PaseSalidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
