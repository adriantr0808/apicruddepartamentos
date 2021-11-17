import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamento {
    constructor(private _http: HttpClient) {

    }

    getDepartamentos(): Observable<any> {
        var request = '/api/departamentos';
        var url = Global.urldepartamentos + request;
        return this._http.get(url);
    }

    postDepartamentos(departamento: Departamento): void {
        //DEBEMOS CONVERTIR EL OBJETO A JSON
        var json = JSON.stringify(departamento);
        //DEBEMOS INDICAR QUE TIPO DE OBJETO VAMOS A EVNIAR
        //POR DEFECTO LOS SERVICIOS ESTAN ESTIPULADOS PARA JSON
        //PERO NO TODOS.
        var header = new HttpHeaders().set('Content-Type', 'application/json');
        var request = '/api/departamentos';
        var url = Global.urldepartamentos + request;
        this._http.post(url, json, { headers: header });
    }
}