import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosLayoutComponent } from './productos-layout/productos-layout.component';

@NgModule({
  declarations: [ProductosLayoutComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductosModule { }
