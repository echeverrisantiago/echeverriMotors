import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: AdminAuthComponent
      },
      {
        path: 'register',
        component: AdminAuthComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule]
})
export class AdminAuthRoutingModule { }
