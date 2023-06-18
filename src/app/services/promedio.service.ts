import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PromedioService {
  //url_py ='http://localhost:5000/'
  //url_aws ='https://kr0un06gxd.execute-api.us-east-2.amazonaws.com/'
  url_aws ='https://duozqzwij5.execute-api.us-east-2.amazonaws.com/dev'
  constructor(
    private http:HttpClient
  ) {
  }

  obtenerPromedio(lista: string[]){
    const headers = new HttpHeaders({

    });
    const options = { headers: headers };

    const myObject: { [index: string]: string } = {};

    lista.forEach((value, index) => {
      myObject[index.toString()] = value;
    });
    console.log(myObject)
    console.log(myObject)
    //return this.http.post(this.url_py+'obtener-promedio',myObject,options);
    //return this.http.post(this.url_aws+'obtener-promedio',myObject,options);
    return this.http.post(this.url_aws,myObject,options);
  }
}
