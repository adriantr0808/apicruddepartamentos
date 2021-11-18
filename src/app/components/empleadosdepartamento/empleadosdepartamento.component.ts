import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceEmpleados } from 'src/app/services/empleados.service';
import { Empleados } from 'src/app/models/empleados';
@Component({
  selector: 'app-empleadosdepartamento',
  templateUrl: './empleadosdepartamento.component.html',
  styleUrls: ['./empleadosdepartamento.component.css']
})
export class EmpleadosdepartamentoComponent implements OnInit {
  public empleados!: Array<Empleados>;
  constructor(private _activateRoute: ActivatedRoute, private _service: ServiceEmpleados) { }



  cargarEmpleados(iddepartamento: string): void {
    this._service.getEmpleadoDepartamento(iddepartamento).subscribe(res => {
      this.empleados = res;

      console.log(this.empleados);
    });
  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      if (params['num'] != null) {
        var id = params['num'];
        this.cargarEmpleados(id);

      }
    });
  }
}
