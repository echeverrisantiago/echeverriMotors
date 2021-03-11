import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.verifyTheme();
  }

  toggleTheme(){
    if(this.isDarkTheme){
      this.isDarkTheme = false;
      localStorage.setItem('theme','Light');
    } else{
      this.isDarkTheme = true;
      localStorage.setItem('theme','Dark');
    }
  }

  verifyTheme(){
    this.isDarkTheme = localStorage.getItem('theme') === 'Dark' ? true : false;
  }

}
