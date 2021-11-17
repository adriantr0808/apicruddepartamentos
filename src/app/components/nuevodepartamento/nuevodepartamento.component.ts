import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ServiceDepartamento } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nuevodepartamento',
  templateUrl: './nuevodepartamento.component.html',
  styleUrls: ['./nuevodepartamento.component.css']
})
export class NuevodepartamentoComponent implements OnInit {


  @ViewChild('cajanumero') cajanumero!: ElementRef;
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajalocalidad') cajalocalidad!: ElementRef;
  constructor(private _service: ServiceDepartamento) { }

  ngOnInit(): void {

  }

  insertarDepartamento(): void {
    var num = this.cajanumero.nativeElement.value;
    var nom = this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;

    var dept = new Departamento(num, nom, loc);

    this._service.postDepartamentos(dept);

  }

}
