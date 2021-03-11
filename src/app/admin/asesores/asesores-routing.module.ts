import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoresActualesComponent } from './asesores-actuales/asesores-actuales.component';
import { AsesoresCreateComponent } from './asesores-create/asesores-create.component';
import { AsesoresEditComponent } from './asesores-edit/asesores-edit.component';
import { AsesoresLayoutComponent } from './asesores-layout/asesores-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AsesoresLayoutComponent,
    children : [
      {
        path: '',
        pathMatch: 'full',
        component: AsesoresActualesComponent
      },
      {
        path: 'create',
        component: AsesoresCreateComponent
      },
      {
        path: ':id',
        component: AsesoresEditComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesoresRoutingModule { }
