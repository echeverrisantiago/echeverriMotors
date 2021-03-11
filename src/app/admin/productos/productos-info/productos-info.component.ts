import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from './../../../services/admin/productos.service';
import { environment } from './../../../../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-productos-info',
  templateUrl: './productos-info.component.html',
  styleUrls: ['./productos-info.component.css']
})
export class ProductosInfoComponent implements OnInit {

  form: FormGroup;
  validadoProduct: boolean = true;
  validadoProductInfo: boolean = true;
  errors: boolean|string;
  image: any;
  marke: any;
  model: any;
  year: any;
  product: any = [];
  mainImg: string;
  id: number;
  table: any;
  row: any = [];
  lengthColumns: any;

  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router,
    private http: HttpClient,
    private storage: AngularFireStorage,
    private route: ActivatedRoute
    ) {
      this.productGet();
    }

  ngOnInit(): void {
  }

  productGet(){
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productosService.getProductInfo(this.id)
        .subscribe((product) => {
          if(product){
            this.product = product;
            for (let i = 0; i< this.product.length; i++){
              if(this.row.indexOf(this.product[i].row_number) == -1){
            this.row.push(this.product[i].row_number);
            }
          }
          console.log(this.row);
          } else{
            this.product = false;
          }
        })
    });
  }

  filterDataRow(data: number){
    data = data + 1;
    const result = this.product.filter(s => s.row_number == data);
    return result;
  }

  addRow(){
    alert('true');
  }

}
