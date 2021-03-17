import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { SalesService } from './../../../services/admin/sales.service';
import { ProductosService } from './../../../services/admin/productos.service';
import { AsesoresService } from './../../../services/admin/asesores.service';
import { CustomersService } from './../../../services/admin/customers.service';
import { environment } from './../../../../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-ventas-edit',
  templateUrl: './ventas-edit.component.html',
  styleUrls: ['./ventas-edit.component.css']
})
export class VentasEditComponent implements OnInit {

  form: FormGroup;
  errors: boolean|string;
  products: any;
  advisers: any;
  image: File;
  users: any;
  customers: any;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private salesService: SalesService,
    private router: Router,
    private http: HttpClient,
    private storage: AngularFireStorage,
    private asesoresService: AsesoresService,
    private productosService: ProductosService,
    private customerService: CustomersService,
    private route: ActivatedRoute
    ) {
      this.asignData();
    }

  ngOnInit(): void {
    this.buildForm();
  }

  asignData(){
    this.asignAdvisers();
    this.asignProducts();
    this.asignCustomers();
    this.patchValues();
  }

  patchValues(){
    this.route.params.subscribe((params: Params) => {
     this.id = params.id;
        this.salesService.getSale(this.id)
        .subscribe((data) => {
          this.assignValues(data);
        })
    });
  }

  assignValues(sales: any){
    this.form.patchValue({
      product_id: sales.product_id,
      customer_id: sales.customer_id,
      adviser_id: sales.adviser_id,
      sale_state: sales.sale_state
    });
  }

  asignAdvisers(){
    return this.asesoresService.index()
    .subscribe((data) => {
      this.advisers = data;
    })
  }

  asignProducts(){
    return this.productosService.index()
    .subscribe((data) => {
      this.products = data;
    })
  }

  asignCustomers(){
    return this.customerService.index()
    .subscribe((data) => {
      console.log(data);
      this.customers = data;
    })
  }

  listar(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const formData = this.form.value;
      formData.id = this.id;
      return this.salesService.update(formData)
      .subscribe((response) => {
        if(response){
          this.router.navigate(['/admin/ventas']);
          this.errors = false;
        } else{
          this.errors = 'Ha habido un error al ingresa la venta';
          this.router.navigate(['/admin/ventas']);
        }
        console.log(response);
      })
    }
  }

  productImage(event){
    this.image = <File>event.target.files[0];
    console.log(this.image);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      product_id: ['',[Validators.required, Validators.minLength(1)]],
      customer_id: ['',[Validators.required, Validators.minLength(1)]],
      adviser_id: ['',[Validators.required, Validators.minLength(1)]],
      sale_state: ['',[Validators.required, Validators.minLength(1)]]
    })
  }

}
