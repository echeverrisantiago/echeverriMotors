import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AsesoresService } from './../../../services/admin/asesores.service';
import { environment } from './../../../../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-asesores-edit',
  templateUrl: './asesores-edit.component.html',
  styleUrls: ['./asesores-edit.component.css']
})
export class AsesoresEditComponent implements OnInit {

  form: FormGroup;
  validadoProduct: boolean = true;
  validadoProductInfo: boolean = true;
  errors: boolean | string;
  image: any;
  marke: any;
  model: any;
  year: any;
  item: any;
  mainImg: any;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private asesoresService: AsesoresService,
    private router: Router,
    private http: HttpClient,
    private storage: AngularFireStorage,
    private route: ActivatedRoute
  ) {
    this.DataGet();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  DataGet() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.asesoresService.getItem(this.id)
        .subscribe((data) => {
          this.item = data;
          this.mainImg = this.item.image;
          this.assignValues(this.item);
        })
    });
  }

  assignValues(data: any) {
    this.form.patchValue({
      document: data.document,
      name: data.name,
      surnames: data.surnames,
      phone: data.phone,
      email: data.email,
      image: data.image
    });
  }

  actualizarItem(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const formData = this.form.value;
      formData.id = this.id;
      if (this.image) {
        alert(this.image + 'defined');
        this.uploadImg(formData);
      } else {
        alert(this.image + 'undefined');
        this.actualizarData(formData);
      }
    }
  }

  asesorImage(event) {
    this.image = <File>event.target.files[0];
    console.log(this.image);
  }

  uploadImg(data: any) {
    const formData = data;
    let file_ext = this.image.name.split('.')[1];
    const ref = 'home-carousel/' + `${data.position}/${data.position}.${file_ext}`;

    const mainImg = this.storage.upload(ref, this.image)
    const fileRef = this.storage.ref(ref);

    mainImg.snapshotChanges()
      .pipe(
        finalize(() => {
          const ImgRef = fileRef.getDownloadURL()
          ImgRef.subscribe((url) => {
            formData.image = url;
            this.actualizarData(formData);
          })
        })
      )
      .subscribe();
  }

  actualizarData(data: any) {
    return this.asesoresService.update(data)
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/admin/asesores']);
          this.errors = false;
        } else {
          alert('Ha habido un error al actualizar el item');
          this.router.navigate(['/admin/asesores']);
        }
        console.log(response);
      })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      document: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      surnames: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      phone: ['', Validators.minLength(7)],
      image: ['', [Validators.minLength(4)]]
    })
  }

}
