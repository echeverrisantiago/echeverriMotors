import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeCarouselRoutingModule } from './home-carousel-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from './../../material/material.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CarouselEditComponent } from './carousel-edit/carousel-edit.component';
import { CarouselCreateComponent } from './carousel-create/carousel-create.component';

@NgModule({
  declarations: [LayoutComponent, CarouselComponent, CarouselEditComponent, CarouselCreateComponent],
  imports: [
    CommonModule,
    HomeCarouselRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
  ],
  exports: [
    RouterModule,
    MaterialModule,
    ConfirmationPopoverModule
  ]
})
export class HomeCarouselModule { }
