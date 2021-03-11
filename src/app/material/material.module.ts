import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatGridListModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatBadgeModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatStepperModule
       ],
      exports: [
        MatButtonModule,
        MatGridListModule,
        MatSelectModule,
        MatSidenavModule,
        MatInputModule,
        MatListModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatRadioModule,
        MatBadgeModule,
        MatCardModule,
        MatStepperModule,
        MatSlideToggleModule
      ]
})
export class MaterialModule {}