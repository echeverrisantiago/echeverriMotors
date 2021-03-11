import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Origin','*');
   }

  register(user: any){
    return this.http.post(`${environment.laravel_api}/users`, user, {headers: this.headers});
  }

  login(email: string, password: string){

    const data = {
      email: email,
      password: password
    }
    return this.http.post<string>(`${environment.laravel_api}/users`,data);
  }

}
