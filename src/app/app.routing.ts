import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListadepartamentosComponent } from './components/listadepartamentos/listadepartamentos.component';
import { NuevodepartamentoComponent } from './components/nuevodepartamento/nuevodepartamento.component';
import { ModificardepartamentoComponent } from './components/modificardepartamento/modificardepartamento.component';
import { EliminardepartamentoComponent } from './components/eliminardepartamento/eliminardepartamento.component';
import { EmpleadosdepartamentoComponent } from './components/empleadosdepartamento/empleadosdepartamento.component';
import { IncrementarsalarioempleadoComponent } from './components/incrementarsalarioempleado/incrementarsalarioempleado.component';

const appRoutes: Routes = [
    { path: "", component: ListadepartamentosComponent },
    { path: "listadepartamentos", component: ListadepartamentosComponent },
    { path: "eliminardepartamento/:num", component: ListadepartamentosComponent },
    { path: "nuevodepartamento", component: NuevodepartamentoComponent },
    { path: "modificardepartamento/:num", component: ModificardepartamentoComponent },
    { path: "empleadosdepartamento/:num", component: EmpleadosdepartamentoComponent },
    { path: "incrementarsalario/:id", component: IncrementarsalarioempleadoComponent },


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);