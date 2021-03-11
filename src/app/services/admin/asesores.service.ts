import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Products } from './../../admin/productos/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class AsesoresService {
  private headers: any;

  constructor(
    private http: HttpClient
    ) {
      this.headers = new HttpHeaders;
      this.headers.append('Access-Control-Allow-Origin','*');
     }

     index(){
      return this.http.get<Products[]>(`${environment.laravel_api}/advisers`, {headers: this.headers});
     }

     getItem(id: any){
      return this.http.get<Products[]>(`${environment.laravel_api}/adviser/${id}`, {headers: this.headers});
     }

     store(data: any){
      return this.http.post(`${environment.laravel_api}/adviser`, data, {headers: this.headers});
     }

     update(data: any){
      return this.http.post(`${environment.laravel_api}/advisersUpdate`, data, {headers: this.headers});
     }

     delete(data: number){
      return this.http.delete(`${environment.laravel_api}/adviser/${data}`, {headers: this.headers});
     }
}
