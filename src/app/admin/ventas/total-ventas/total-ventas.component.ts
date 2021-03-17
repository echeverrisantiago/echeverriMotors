import { Component, OnInit } from '@angular/core';
import { SalesService } from './../../../services/admin/sales.service';

@Component({
  selector: 'app-total-ventas',
  templateUrl: './total-ventas.component.html',
  styleUrls: ['./total-ventas.component.css']
})
export class TotalVentasComponent implements OnInit {

  dataSource: any[];

  displayedColumns: string[] = ['position', 'product','customer','adviser','sale_state','date','actions'];
  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.indexProducts();
  }

  indexProducts(){
    this.salesService.index()
    .subscribe((products) => {
      if(products){
        console.log(products);
        this.dataSource = products;
      }
    })
  }

  deleteProduct(id){
    this.salesService.delete(id)
    .subscribe((products) => {
      if(products){
        this.indexProducts();
      }
    })
  }

}
