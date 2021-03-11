import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselCreateComponent } from './carousel-create/carousel-create.component';
import { CarouselEditComponent } from './carousel-edit/carousel-edit.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CarouselComponent,
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CarouselCreateComponent
      },
      {
        path: ':id',
        component: CarouselEditComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCarouselRoutingModule { }

