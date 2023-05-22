import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BotpressService {
  private apiUrl = 'https://cdn.botpress.cloud/webchat/v0';
  token = "bp_pat_b8eBdrNqGlPdb8K4NCGvsb1AObQKnwEhKHzD"

  constructor(
    private http: HttpClient
  ) { }

  getConversations(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    const options = { headers: headers };

    const url = this.apiUrl;
    return this.http.get(url, options);
  }
}
