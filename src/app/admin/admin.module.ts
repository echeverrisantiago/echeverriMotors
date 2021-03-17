import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalVentasComponent } from './ventas/total-ventas/total-ventas.component';
import { ProductosActualesComponent } from './productos/productos-actuales/productos-actuales.component';
import { AsesoresActualesComponent } from './asesores/asesores-actuales/asesores-actuales.component';
import { ProductosCreateComponent } from './productos/productos-create/productos-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosEditComponent } from './productos/productos-edit/productos-edit.component';
import { ProductosInfoComponent } from './productos/productos-info/productos-info.component';
import { AsesoresCreateComponent } from './asesores/asesores-create/asesores-create.component';
import { AsesoresEditComponent } from './asesores/asesores-edit/asesores-edit.component';
import { AsesoresLayoutComponent } from './asesores/asesores-layout/asesores-layout.component';
import { VentasAgregarComponent } from './ventas/ventas-agregar/ventas-agregar.component';
import { VentasEditComponent } from './ventas/ventas-edit/ventas-edit.component';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, TotalVentasComponent, ProductosActualesComponent, ProductosInfoComponent, AsesoresActualesComponent, ProductosCreateComponent, ProductosEditComponent, AsesoresCreateComponent, AsesoresEditComponent, AsesoresLayoutComponent, VentasAgregarComponent, VentasEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
