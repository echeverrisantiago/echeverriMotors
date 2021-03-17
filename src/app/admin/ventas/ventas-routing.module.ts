import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasLayoutComponent } from './ventas-layout/ventas-layout.component';
import { TotalVentasComponent } from './total-ventas/total-ventas.component';
import { VentasAgregarComponent } from './ventas-agregar/ventas-agregar.component';
import { VentasEditComponent } from './ventas-edit/ventas-edit.component';

const routes: Routes = [
  {
    path: '',
    component: VentasLayoutComponent,
    children: [
        {
          path: '',
          pathMatch: 'full',
          component: TotalVentasComponent
        },
        {
          path: 'create',
          component: VentasAgregarComponent
        },
        {
          path: ':id',
          component: VentasEditComponent
        }
      ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VentasRoutingModule { }





