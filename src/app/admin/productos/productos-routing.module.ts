import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosActualesComponent } from './productos-actuales/productos-actuales.component';
import { ProductosCreateComponent } from './productos-create/productos-create.component';
import { ProductosEditComponent } from './productos-edit/productos-edit.component';
import { ProductosLayoutComponent } from './productos-layout/productos-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosLayoutComponent,
    children: [
        {
          path: '',
          pathMatch: 'full',
          component: ProductosActualesComponent
        },
        {
        path: 'create',
        component: ProductosCreateComponent
        },
        {
        path: ':id',
        component: ProductosEditComponent
        }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }

