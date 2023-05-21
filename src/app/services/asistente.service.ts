import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {
  url_py = environment.urlPython;
  constructor(
    private http:HttpClient
  ) {
  }

  textoVoz(texto: string[]){
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:4200' });
    const options = { headers: headers };

    const myObject: { [index: number]: string } = {};

    texto.forEach((value, index) => {
      myObject[index] = value;
    });
    return this.http.post(this.url_py+'texto-voz',myObject,options);
  }
}
