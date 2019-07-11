import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbonosComponent } from '././componentes/abonos/abonos.component';
import { CarterasComponent } from '././componentes/carteras/carteras.component';
import { ConductoresComponent } from '././componentes/conductores/conductores.component';
import { VehiculosComponent } from '././componentes/vehiculos/vehiculos.component';

const routes: Routes = [
{
path:'Abonos',
component:AbonosComponent
},
{
path:'Carteras',
component:CarterasComponent
},
{
path:'Conductores',
component:ConductoresComponent
},
{
  path:'Vehiculos',
  component:VehiculosComponent
}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }