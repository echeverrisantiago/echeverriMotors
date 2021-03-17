import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './../../material/material.module';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AngularFileUploaderModule } from 'angular-file-uploader';

@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AngularFileUploaderModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule,
    RouterModule,
    AngularFileUploaderModule,
    ConfirmationPopoverModule
  ]
})
export class SharedModule { }
