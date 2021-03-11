import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { CarouselService } from './../../../services/admin/carousel.service';
import { environment } from './../../../../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-carousel-create',
  templateUrl: './carousel-create.component.html',
  styleUrls: ['./carousel-create.component.css']
})
export class CarouselCreateComponent implements OnInit {

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
    }

  ngOnInit(): void {
    this.buildForm();
  }

  listarCarouselItem(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const formData = this.form.value;
      this.uploadImg(formData);
    }
  }

  itemImage(event){
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
          formData.content = url;
          console.log(formData);
          this.listarCarouselData(formData);
        })
      })
    )
    .subscribe();
  }

  listarCarouselData(data: any){
    return this.carouselService.store(data)
    .subscribe((response) => {
      if(response){
        this.router.navigate(['/admin/homeCarousel']);
        this.errors = false;
        console.log(response);
      } else{
        alert('Ha habido un error al ingresar el item');
        this.router.navigate(['/admin/homeCarousel']);
      }
      console.log(response);
    })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      type_content: ['',[Validators.required, Validators.minLength(3)]],
      position: ['',[Validators.required, Validators.minLength(1)]],
      image: ['',[Validators.required, Validators.minLength(1)]]
    })
  }
}
