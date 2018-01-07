import { Component } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('moveCard', [      
      transition('void => *', [
        animate(700, keyframes([
            style({opacity: 0, transform: 'translateY(700px)', offset: 0}),
            style({opacity: 1, transform: 'translateY(45px)', offset: .75}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
      ])
    ])
  ]

})
export class AboutComponent {

}