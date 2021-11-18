import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceEmpleados } from 'src/app/services/empleados.service';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-incrementarsalarioempleado',
  templateUrl: './incrementarsalarioempleado.component.html',
  styleUrls: ['./incrementarsalarioempleado.component.css']
})
export class IncrementarsalarioempleadoComponent implements OnInit {
  public id!: string;
  public empleado!: Empleados;
  @ViewChild('cajasalario') cajasalario!: ElementRef;
  constructor(private _activateRoute: ActivatedRoute, private _service: ServiceEmpleados) { }

  cargarEmpleado(id: string): void {
    this._service.getDetallesEmpleado(id).subscribe(res => {
      this.empleado = res;
      console.log(this.empleado);
    })
  }

  incrementarSalario(): void {
    var sal = this.cajasalario.nativeElement.value;
    this._service.incrementarSalarioEmpleado(this.id, sal).subscribe(res => {
      this.cargarEmpleado(this.id);
    });
  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        var id = params['id'];
        this.id = id;
        this.cargarEmpleado(id);
      }
    });
  }

}
