import { Component, OnInit } from '@angular/core';
import { ServiceDepartamento } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';

import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-listadepartamentos',
  templateUrl: './listadepartamentos.component.html',
  styleUrls: ['./listadepartamentos.component.css']
})
export class ListadepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;
  constructor(private _service: ServiceDepartamento, private _activateRoute: ActivatedRoute,
    private _router: Router) { }


  cargarDepartamentos(): void {
    this._service.getDepartamentos().subscribe(res => {
      this.departamentos = res;

    });

  }

  eliminarDepartamentoBoton(iddepartamento: number): void {
    this._service.deleteDepartamento(iddepartamento).subscribe(res => {
      this.cargarDepartamentos();
    });
  }

  ngOnInit(): void {
    //Para recibir parametros, es un codigo aislado y asincrono
    this._activateRoute.params.subscribe((params: Params) => {
      if (params['num'] != null) {
        var id = parseInt(params['num']);
        this.eliminarDepartamentoBoton(id);

      }
    });

    this.cargarDepartamentos();


  }

}
