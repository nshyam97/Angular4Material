import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Output() 
  isDarkMode = new EventEmitter<boolean>();

  isLight: boolean;
  isDark: boolean;

  ngOnInit() {
    this.isDark = false;
    this.isLight = true;
  }

  changeMode(){
    if(this.isDark) {
      this.isDarkMode.emit(false);
      this.isLight = true;
      this.isDark = false;
    } else {
      this.isDarkMode.emit(true);
      this.isLight = false;
      this.isDark = true;
    }
  }
}