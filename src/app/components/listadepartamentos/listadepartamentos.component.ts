import { Component, OnInit } from '@angular/core';
import { ServiceDepartamento } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';
@Component({
  selector: 'app-listadepartamentos',
  templateUrl: './listadepartamentos.component.html',
  styleUrls: ['./listadepartamentos.component.css']
})
export class ListadepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;
  constructor(private _service: ServiceDepartamento) { }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }


  cargarDepartamentos(): void {
    this._service.getDepartamentos().subscribe(res => {
      this.departamentos = res;
      console.log(this.departamentos);
    });
  }
}
