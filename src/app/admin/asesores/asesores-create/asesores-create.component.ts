import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AsesoresService } from './../../../services/admin/asesores.service';
import { environment } from './../../../../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-asesores-create',
  templateUrl: './asesores-create.component.html',
  styleUrls: ['./asesores-create.component.css']
})
export class AsesoresCreateComponent implements OnInit {

  form: FormGroup;
  validadoProduct: boolean = true;
  validadoProductInfo: boolean = true;
  errors: boolean|string;
  image: any;

  constructor(
    private formBuilder: FormBuilder,
    private asesoresService: AsesoresService,
    private router: Router,
    private http: HttpClient,
    private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  listar(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const formData = this.form.value;
      this.uploadImg(formData);
    }
  }

  asesorImage(event){
    this.image = <File>event.target.files[0];
  }

  uploadImg(data: any){
    const formData = data;
    let file_ext = this.image.name.split('.')[1];
    const ref = 'advisers/'+`${data.document}/${data.document}.${file_ext}`;

    const mainImg = this.storage.upload(ref,this.image)
    const fileRef = this.storage.ref(ref);

    mainImg.snapshotChanges()
    .pipe(
      finalize(() => {
         const ImgRef = fileRef.getDownloadURL()
         ImgRef.subscribe((url) => {
          formData.image = url;
          console.log(formData);
          this.listarData(formData);
        })
      })
    )
    .subscribe();
  }

  listarData(data: any){
    return this.asesoresService.store(data)
      .subscribe((res) => {
        if(res){
          this.router.navigate(['admin/asesores']);
          this.errors = false;
        } else{
          this.errors = 'Ha habido un error al guardar el asesor';
          this.router.navigate(['/admin/asesores']);
        }
      })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      document: ['',[Validators.required, Validators.minLength(8)]],
      name: ['',[Validators.required, Validators.minLength(4)]],
      surnames: ['',[Validators.required, Validators.minLength(6)]],
      email: ['',[Validators.required, Validators.minLength(1), Validators.email]],
      phone: ['', Validators.minLength(7)],
      image: ['',[Validators.required,Validators.minLength(4)]]
    })
  }

}
