import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceEmpleados {
    constructor(private _http: HttpClient) {
    }
    getEmpleadoDepartamento(iddepartamento: string): Observable<any> {
        var request = '/api/Empleados/EmpleadosDepartamento/' + iddepartamento;
        var url = Global.urlempleadosfullstack + request;
        return this._http.get(url);
    }


    getDetallesEmpleado(idempleado: string): Observable<any> {
        var request = '/api/empleados/' + idempleado;
        var url = Global.urlempleadosaction + request;
        return this._http.get(url);
    }

    incrementarSalarioEmpleado(idempleado: string, incremento: string): Observable<any> {
        var request = '/api/Empleados/IncrementarSalario/' + idempleado + '/' + incremento;
        var url = Global.urlempleadosaction + request;
        var header = new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.put(url, { headers: header });
    }
}