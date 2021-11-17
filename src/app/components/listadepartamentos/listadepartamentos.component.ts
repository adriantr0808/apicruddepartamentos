import { Component, OnInit } from '@angular/core';
import { ServiceDepartamento } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';

import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listadepartamentos',
  templateUrl: './listadepartamentos.component.html',
  styleUrls: ['./listadepartamentos.component.css']
})
export class ListadepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;
  constructor(private _service: ServiceDepartamento, private _activateRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }


  cargarDepartamentos(): void {
    this._service.getDepartamentos().subscribe(res => {
      this.departamentos = res;

    });

  }

  elimnarDepartamento(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      if (params['num'] != null) {
        var id = parseInt(params['num']);
        this._service.deleteDepartamento(id).subscribe(res => {
          this.cargarDepartamentos();
        });
      }

    });
  }

}
