import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  form: FormGroup;
  errors: any;
  backColor: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
      this.buildForm();
    }

  ngOnInit(): void {
  }

  login(event: Event){
    event.preventDefault();
    if(this.form.valid){
    const formData = this.form.value;
    return this.authService.login(formData.email,formData.password)
    .subscribe((response) => {
      if(response){
        this.router.navigate(['/admin']);
        this.errors = false;
      } else{
        this.errors = 'Usuario o contraseña incorrectos';
      }
    })
  }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.minLength(5),Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]]
    })
  }

  changeBack(){
    if(this.backColor == 'dark'){
      this.backColor = 'light';
    } else{
      this.backColor = 'dark';
    }
  }

}
