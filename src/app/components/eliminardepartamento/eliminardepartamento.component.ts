import { Component, OnInit } from '@angular/core';
import { ServiceDepartamento } from 'src/app/services/departamento.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eliminardepartamento',
  templateUrl: './eliminardepartamento.component.html',
  styleUrls: ['./eliminardepartamento.component.css']
})
export class EliminardepartamentoComponent implements OnInit {

  constructor(private _service: ServiceDepartamento,
    private _activateRoute: ActivatedRoute,
    private _router: Router

  ) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      var id = parseInt(params['num']);
      this._service.deleteDepartamento(id).subscribe(res => {
        this._router.navigate(['/']);
      });
    });

  }

}
