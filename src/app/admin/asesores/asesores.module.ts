import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesoresRoutingModule } from './asesores-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AsesoresRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ], exports: [
    RouterModule
  ]
})
export class AsesoresModule { }
