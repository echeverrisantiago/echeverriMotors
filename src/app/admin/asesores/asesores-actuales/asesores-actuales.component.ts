import { Component, OnInit } from '@angular/core';
import { AsesoresService } from './../../../services/admin/asesores.service';


@Component({
  selector: 'app-asesores-actuales',
  templateUrl: './asesores-actuales.component.html',
  styleUrls: ['./asesores-actuales.component.css']
})
export class AsesoresActualesComponent implements OnInit {
  dataSource: any[];

  displayedColumns: string[] = ['position', 'photo','name', 'surname', 'email','phone','actions'];
  constructor(private asesoresService: AsesoresService) { }

  ngOnInit(): void {
    this.indexProducts();
  }

  indexProducts(){
    this.asesoresService.index()
    .subscribe((asesores) => {
      if(asesores){
        console.log(asesores);
        this.dataSource = asesores;
      }
    })
  }

  deleteProduct(id){
    this.asesoresService.delete(id)
    .subscribe((asesores) => {
      if(asesores){
        this.indexProducts();
      }
    })
  }

}
