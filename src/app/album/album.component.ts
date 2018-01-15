import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AlbumComponent  {

  audio = new Audio("http://localhost:8888/songs/Metallica.mp3")

  playSong(){
    this.audio.play();
  }

 

}
