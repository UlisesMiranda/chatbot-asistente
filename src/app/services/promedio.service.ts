import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PromedioService {
  url_py = environment.urlPython;
  constructor(
    private http:HttpClient
  ) {
  }

  obtenerPromedio(lista: string[]){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    const options = { headers: headers };

    const myObject: { [index: number]: string } = {};

    lista.forEach((value, index) => {
      myObject[index] = value;
    });
    console.log(myObject)
    return this.http.post(this.url_py+'obtener-promedio',myObject,options);
  }
}
