import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceDepartamento } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modificardepartamento',
  templateUrl: './modificardepartamento.component.html',
  styleUrls: ['./modificardepartamento.component.css']
})
export class ModificardepartamentoComponent implements OnInit {
  public departamento!: Departamento;
  @ViewChild('cajanumero') cajanumero!: ElementRef;
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajalocalidad') cajalocalidad!: ElementRef;
  constructor(private _activateRoute: ActivatedRoute, private _service: ServiceDepartamento, private _router: Router) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {

      var id = parseInt(params['num']);

      this._service.getDepartamentobyId(id).subscribe(res => {
        this.departamento = res;

      });
    });
  }

  modificarDepartamento(): void {
    var num = parseInt(this.cajanumero.nativeElement.value);
    var nom = this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;

    var dept = new Departamento(num, nom, loc);


    this._service.updateDepartamento(dept).subscribe(res => {
      this._router.navigate(['/']);
    });
  }

}
