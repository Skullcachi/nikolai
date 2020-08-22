import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  API_URL = environment.api_url;
  constructor(
    private http: HttpClient 
  ) { }

  login(credentials){
    let payload = {
      "identifier": credentials.username,
      "password": credentials.password
    }
    return this.http.post(`${this.API_URL}auth/local`, payload);
  }
}
