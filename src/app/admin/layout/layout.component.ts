import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isDarkTheme: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.verifyTheme();
  }

  verifyTheme(){
    this.isDarkTheme = localStorage.getItem('theme') === 'Dark' ? true : false;
  }

}
