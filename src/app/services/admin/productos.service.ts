import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Products } from './../../admin/productos/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private headers: any;

  constructor(
    private http: HttpClient
    ) {
      this.headers = new HttpHeaders;
      this.headers.append('Access-Control-Allow-Origin','*');
     }

     index(){
      return this.http.get<Products[]>(`${environment.laravel_api}/products`, {headers: this.headers});
     }

     getProduct(id: any){
      return this.http.get<Products[]>(`${environment.laravel_api}/product/${id}`, {headers: this.headers});
     }

     getProductInfo(id: any){
      return this.http.get<Products[]>(`${environment.laravel_api}/productInfo/${id}`, {headers: this.headers});
     }

     store(data: any){
      return this.http.post(`${environment.laravel_api}/product`, data, {headers: this.headers});
     }

     update(data: any){
      return this.http.post(`${environment.laravel_api}/productsUpdate`, data, {headers: this.headers});
     }

     delete(data: number){
      return this.http.delete(`${environment.laravel_api}/product/${data}`, {headers: this.headers});
     }
}
