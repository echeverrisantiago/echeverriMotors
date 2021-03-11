import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from './../../../services/admin/productos.service';
import { environment } from './../../../../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-productos-create',
  templateUrl: './productos-create.component.html',
  styleUrls: ['./productos-create.component.css']
})
export class ProductosCreateComponent implements OnInit {

  form: FormGroup;
  validadoProduct: boolean = true;
  validadoProductInfo: boolean = true;
  errors: boolean|string;
  image: any;
  marke: any;
  model: any;
  year: any;

  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router,
    private http: HttpClient,
    private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  listarProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const formData = this.form.value;
      return this.productosService.store(formData)
      .subscribe((response) => {
        if(response){
          this.router.navigate(['/admin/productos']);
          this.uploadImg();
          this.errors = false;
        } else{
          this.errors = 'Ha habido un error al guardar el producto';
          this.router.navigate(['/admin/productos']);
        }
        console.log(response);
      })
    }
  }

  productImage(event){
    this.image = <File>event.target.files[0];
    console.log(this.image);
  }

  uploadImg(){
    const fd = new FormData();
    fd.append('image',this.image,this.image.name);
    this.storage.upload('products/'+`${this.marke+'/'+this.year+'/'+this.model+'/mainImage/'}`+this.image.name,this.image);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      marke: ['',[Validators.required, Validators.minLength(3)]],
      model: ['',[Validators.required, Validators.minLength(2)]],
      price: ['',[Validators.required, Validators.minLength(7)]],
      stock: ['',[Validators.required, Validators.minLength(1)]],
      data_sheet: ['', Validators.minLength(1)],
      year: ['',[Validators.required,Validators.minLength(4)]]
    })
  }

}
