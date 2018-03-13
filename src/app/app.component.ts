import { Component, EventEmitter } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isDarkMode(event: boolean) {
    if (event) {
      jQuery("body").css("background-color", "#000000");
    } else {
      jQuery("body").css("background-color", "#f2f2f2");
    }
  }
}
