import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchStr: string;

  searchMusic(){
    console.log(this.searchStr);
  }
}
