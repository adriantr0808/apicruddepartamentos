import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListadepartamentosComponent } from './components/listadepartamentos/listadepartamentos.component';
import { NuevodepartamentoComponent } from './components/nuevodepartamento/nuevodepartamento.component';

const appRoutes: Routes = [
    { path: "", component: ListadepartamentosComponent },
    { path: "listadepartamentos", component: ListadepartamentosComponent },
    { path: "nuevodepartamento", component: NuevodepartamentoComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);