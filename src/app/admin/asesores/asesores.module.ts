import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesoresRoutingModule } from './asesores-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AsesoresRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ], exports: [
    RouterModule
  ]
})
export class AsesoresModule { }
