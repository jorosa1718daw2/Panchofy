import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  moduleId:module.id,
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SearchComponent {
  searchStr: string;

  searchMusic(){
    console.log(this.searchStr);
  }
}

@Component({
  selector: 'popover',
  templateUrl: './pop-over.html',  
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class PopOverComponent {
  show = false;
  constructor() { }
  get stateName() {
    return this.show ? 'show' : 'hide'
  }
  toggle() {
    this.show = !this.show;
  }
}
