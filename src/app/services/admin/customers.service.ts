import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Products } from './../../admin/productos/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private headers: any;

  constructor(
    private http: HttpClient
    ) {
      this.headers = new HttpHeaders;
      this.headers.append('Access-Control-Allow-Origin','*');
     }

     index(){
      return this.http.get<Products[]>(`${environment.laravel_api}/customers`, {headers: this.headers});
     }

     getCarouselItem(id: any){
      return this.http.get<Products[]>(`${environment.laravel_api}/customers/${id}`, {headers: this.headers});
     }

     store(data: any){
      return this.http.post(`${environment.laravel_api}/customers`, data, {headers: this.headers});
     }

     update(data: any){
      return this.http.post(`${environment.laravel_api}/customersUpdate`, data, {headers: this.headers});
     }

     delete(data: number){
      return this.http.delete(`${environment.laravel_api}/customers/${data}`, {headers: this.headers});
     }
}
