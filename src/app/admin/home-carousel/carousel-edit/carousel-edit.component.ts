import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { CarouselService } from './../../../services/admin/carousel.service';
import { environment } from './../../../../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-carousel-edit',
  templateUrl: './carousel-edit.component.html',
  styleUrls: ['./carousel-edit.component.css']
})
export class CarouselEditComponent implements OnInit {

  form: FormGroup;
  validadoProduct: boolean = true;
  validadoProductInfo: boolean = true;
  errors: boolean|string;
  image: any;
  marke: any;
  model: any;
  year: any;
  item: any;
  mainImg: any;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private carouselService: CarouselService,
    private router: Router,
    private http: HttpClient,
    private storage: AngularFireStorage,
    private route: ActivatedRoute
    ) {
      this.CarouselItemGet();
    }

  ngOnInit(): void {
    this.buildForm();
  }

  CarouselItemGet(){
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
        this.carouselService.getCarouselItem(this.id)
        .subscribe((product) => {
          this.item = product;
          this.mainImg = this.item.content;
          this.assignValues(this.item);
        })
    });
  }

  assignValues(data: any){
    this.form.patchValue({
      position: data.position,
      content_type: data.type_content
    });
  }

  actualizarCarouselItem(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const formData = this.form.value;
      formData.id = this.id;
      this.uploadImg(formData);
    }
  }

  productImage(event){
    this.image = <File>event.target.files[0];
    console.log(this.image);
  }

  uploadImg(data: any){
    const formData = data;
    let file_ext = this.image.name.split('.')[1];
    const ref = 'home-carousel/'+`${data.position}/${data.position}.${file_ext}`;

    const mainImg = this.storage.upload(ref,this.image)
    const fileRef = this.storage.ref(ref);

    mainImg.snapshotChanges()
    .pipe(
      finalize(() => {
         const ImgRef = fileRef.getDownloadURL()
         ImgRef.subscribe((url) => {
          formData.image = url;
          this.actualizarCarouselData(formData);
        })
      })
    )
    .subscribe();
  }

  actualizarCarouselData(data: any){
    return this.carouselService.update(data)
    .subscribe((response) => {
      if(response){
        this.router.navigate(['/admin/homeCarousel']);
        this.errors = false;
        console.log(response);
      } else{
        alert('Ha habido un error al actualizar el item');
        this.router.navigate(['/admin/homeCarousel']);
      }
      console.log(response);
    })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      content_type: ['',[Validators.required, Validators.minLength(3)]],
      position: ['',[Validators.required, Validators.minLength(1)]],
      image: ['',[Validators.required, Validators.minLength(1)]]
    })
  }

}
