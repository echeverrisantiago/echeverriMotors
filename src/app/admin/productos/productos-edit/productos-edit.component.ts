import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from './../../../services/admin/productos.service';
import { environment } from './../../../../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.css']
})
export class ProductosEditComponent implements OnInit {

  form: FormGroup;
  validadoProduct: boolean = true;
  validadoProductInfo: boolean = true;
  errors: boolean|string;
  image: any;
  marke: any;
  model: any;
  year: any;
  product: any;
  mainImg: string;
  id: number;

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
    this.buildForm();
  }

  productGet(){
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
        this.productosService.getProduct(this.id)
        .subscribe((product) => {
          this.product = product;
          this.assignValues(this.product);
          this.getImage(this.product);

        })
    });
  }

  assignValues(product: any){
    this.form.patchValue({
      marke: product.marke,
      model: product.model,
      year: product.year,
      price: product.price,
      stock: product.stock,
      reference: product.reference,
      data_sheet: product.data_sheet
    });
  }

  getImage(product: any){
    /* this.storage.ref(product.main_img)
    .getDownloadURL()
    .subscribe(url => {
        this.mainImg = url;
    }); */
    this.mainImg = product.main_img;
  }

  actualizarProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const formData = this.form.value;
      formData.id = this.id;
      console.log(formData);
      return this.productosService.update(formData)
      .subscribe((response) => {
        if(response){
          this.router.navigate(['/admin/productos']);
          this.uploadImg(formData);
          this.errors = false;
          console.log(response);
        } else{
          alert('Ha habido un error al actualizar el producto');
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

  uploadImg(data: any){
    const fd = new FormData();
    fd.append('image',this.image,this.image.name);
    this.storage.upload('products/'+`${data.marke+'/'+data.year+'/'+data.model+'/mainImage/mainImg.png'}`,this.image);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      marke: ['',[Validators.required, Validators.minLength(3)]],
      model: ['',[Validators.required, Validators.minLength(2)]],
      price: ['',[Validators.required, Validators.minLength(7)]],
      stock: ['',[Validators.required, Validators.minLength(1)]],
      reference: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
      data_sheet: ['', Validators.minLength(1)],
      year: ['',[Validators.required,Validators.minLength(4)]]
    })
  }

}
