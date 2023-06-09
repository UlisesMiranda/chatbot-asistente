import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BotpressService {
  private apiUrl = 'https://api.botpress.cloud/v1/chat/events';
  token = "bp_pat_b8eBdrNqGlPdb8K4NCGvsb1AObQKnwEhKHzD"

  constructor(
    private http: HttpClient
  ) { }

  crearMensaje(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`,
      'x-bot-id': `3da24938-458b-4904-ab28-ad71ded6e4b9`
    })

    const options = { headers: headers };

    const url = this.apiUrl;
    return this.http.get(url, options);
  }
}
