import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalVentasComponent } from './ventas/total-ventas/total-ventas.component';
import { ProductosActualesComponent } from './productos/productos-actuales/productos-actuales.component';
import { ProductosCreateComponent } from './productos/productos-create/productos-create.component';
import { AsesoresActualesComponent } from './asesores/asesores-actuales/asesores-actuales.component';
import { ProductosEditComponent } from './productos/productos-edit/productos-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'ventas',
        loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
      },
      {
        path: 'asesores',
        loadChildren: () => import('./asesores/asesores.module').then(m => m.AsesoresModule)
      },
      {
        path: 'homeCarousel',
        loadChildren: () => import('./home-carousel/home-carousel.module').then(m => m.HomeCarouselModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

