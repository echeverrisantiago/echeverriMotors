import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasRoutingModule } from './ventas-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { VentasLayoutComponent } from './ventas-layout/ventas-layout.component';

@NgModule({
  declarations: [VentasLayoutComponent],
  imports: [
    CommonModule,
    VentasRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class VentasModule { }
