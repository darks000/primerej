import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '././services/in-memory-data.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AbonosComponent } from './componentes/abonos/abonos.component';
import { CarterasComponent } from './componentes/carteras/carteras.component';
import { ConductoresComponent } from './componentes/conductores/conductores.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component';
import { AppRoutingModule } from './/app-routing.module';
import { CrearabonoComponent } from './componentes/crearabono/crearabono.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AbonosComponent,
    CarterasComponent,
    ConductoresComponent,
    VehiculosComponent,
    CrearabonoComponent
  ],
 imports: [
BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
HttpClientModule,
FormsModule,
RouterModule.forRoot([
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'counter', component: CounterComponent },
{ path: 'fetch-data', component: FetchDataComponent },
]),
HttpClientModule,
//HttpClientInMemoryWebApiModule.forRoot(
//InMemoryDataService, { dataEncapsulation: false }
//),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
