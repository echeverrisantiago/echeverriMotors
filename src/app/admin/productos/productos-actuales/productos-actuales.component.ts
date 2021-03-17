import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../../services/admin/productos.service';
import { Products } from './../productos.interface';

@Component({
  selector: 'app-productos-actuales',
  templateUrl: './productos-actuales.component.html',
  styleUrls: ['./productos-actuales.component.css']
})
export class ProductosActualesComponent implements OnInit {
  dataSource: Products[];

  displayedColumns: string[] = ['position', 'reference','marke', 'model', 'year','price','stock','data_sheet','actions'];
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.indexProducts();
  }

  indexProducts(){
    this.productosService.index()
    .subscribe((products) => {
      if(products){
        console.log(products);
        this.dataSource = products;
      }
    })
  }

  deleteProduct(id){
    this.productosService.delete(id)
    .subscribe((products) => {
      if(products){
        this.indexProducts();
      }
    })
  }

}
