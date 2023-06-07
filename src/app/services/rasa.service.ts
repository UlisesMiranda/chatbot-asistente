import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JSONFile} from "@angular/cli/src/utilities/json-file";

@Injectable({
  providedIn: 'root'
})
export class RasaService {
  //private apiUrl = 'http://localhost:5005/webhooks/rest/webhook';
  private apiUrl = 'https://e825-2806-104e-18-11e8-195e-e4a7-9473-2df3.ngrok-free.app/webhooks/rest/webhook';
  token = "bp_pat_b8eBdrNqGlPdb8K4NCGvsb1AObQKnwEhKHzD"

  constructor(
    private http: HttpClient
  ){ }

  enviarMensaje(mensaje: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    const options = { headers: headers };

    const mensajeJSON = {
      "sender": "shine",
      "message": mensaje
    }

    const url = this.apiUrl;
    return this.http.post(url, mensajeJSON, options);

  }
}

