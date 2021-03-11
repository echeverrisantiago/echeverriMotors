import { Component, OnInit } from '@angular/core';
import { CarouselService } from './../../../services/admin/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  itemsCarousel: any;

  constructor(private productosService: CarouselService) { }

  ngOnInit(): void {
    this.indexCarousel();
  }

  indexCarousel(){
    this.productosService.index()
    .subscribe((data) => {
      if(data){
       this.itemsCarousel = data;
      }
    })
  }

  deleteItem(id){
    this.productosService.delete(id)
    .subscribe((products) => {
      if(products){
        this.indexCarousel();
      }
    })
  }
}
