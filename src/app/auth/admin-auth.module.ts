import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAuthRoutingModule } from './admin-auth-routing.module'
import { AuthService } from './../services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminAuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ]
})
export class AdminAuthModule { }
