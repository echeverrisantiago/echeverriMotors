import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from './../../../services/admin/productos.service';
import { environment } from './../../../../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';
import { catchError, finalize } from 'rxjs/operators';

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
  main_img: any;

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
      this.uploadImg(formData);
    }
  }

  productImage(event){
    this.image = <File>event.target.files[0];
    console.log(this.image);
  }

  uploadImg(data: any){
    const formData = data;
    const fd = new FormData();
    fd.append('image',this.image,this.image.name);
    const ref = 'products/'+`${data.reference+'/mainImage/'}`+this.image.name;
    const mainImg = this.storage.upload(ref,this.image);
    const fileRef = this.storage.ref(ref);

    mainImg.snapshotChanges()
    .pipe(
      finalize(() => {
         const ImgRef = fileRef.getDownloadURL()
         ImgRef.subscribe((url) => {
          formData.main_img = url;
          this.uploadData(formData);
        })
      })
    )
    .subscribe();
  }

  uploadData(formData){
    return this.productosService.store(formData)
      .subscribe((response) => {
        if(response){
          this.router.navigate(['/admin/productos']);
          this.errors = false;
        } else{
          this.errors = 'Ha habido un error al guardar el producto';
          this.router.navigate(['/admin/productos']);
        }
        console.log(response);
      })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      marke: ['',[Validators.required, Validators.minLength(3)]],
      model: ['',[Validators.required, Validators.minLength(2)]],
      price: ['',[Validators.required, Validators.minLength(7)]],
      stock: ['',[Validators.required, Validators.minLength(1)]],
      reference: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(8)]],
      data_sheet: ['', Validators.minLength(1)],
      year: ['',[Validators.required,Validators.minLength(4)]]
    })
  }

}
