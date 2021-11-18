import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { ListadepartamentosComponent } from './components/listadepartamentos/listadepartamentos.component';
import { ServiceDepartamento } from './services/departamento.service';
import { NuevodepartamentoComponent } from './components/nuevodepartamento/nuevodepartamento.component';
import { ModificardepartamentoComponent } from './components/modificardepartamento/modificardepartamento.component';
import { EliminardepartamentoComponent } from './components/eliminardepartamento/eliminardepartamento.component';
import { ServiceEmpleados } from './services/empleados.service';
import { EmpleadosdepartamentoComponent } from './components/empleadosdepartamento/empleadosdepartamento.component';
import { IncrementarsalarioempleadoComponent } from './components/incrementarsalarioempleado/incrementarsalarioempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadepartamentosComponent,
    NuevodepartamentoComponent,
    ModificardepartamentoComponent,
    EliminardepartamentoComponent,
    EmpleadosdepartamentoComponent,
    IncrementarsalarioempleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing

  ],
  providers: [appRoutingProviders, ServiceDepartamento, ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
