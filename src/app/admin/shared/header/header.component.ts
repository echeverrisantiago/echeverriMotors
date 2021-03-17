import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = false;
  isChecked: string = '';

  constructor() { }

  ngOnInit(): void {
    this.verifyTheme();
  }

  toggleTheme(){
    if(this.isDarkTheme){
      this.isDarkTheme = false;
      this.isChecked = '';
      localStorage.setItem('theme','Light');
    } else{
      this.isDarkTheme = true;
      this.isChecked == 'mat-checked';
      localStorage.setItem('theme','Dark');
    }
  }

  verifyTheme(){
    if(localStorage.getItem('theme') === 'Dark'){
      this.isDarkTheme = true;
      this.isChecked = 'mat-checked';
  } else{
    this.isDarkTheme = false;
    this.isChecked = '';
  }
  }
}
