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

  playSong() {
    if (this.audio.paused){
      this.audio.play();
    } else {
     this.audio.pause();
    }

    return this.audio.paused;
  }

    
    audio2 = new Audio("http://localhost:8888/songs/Arctic_Monkeys_Do_I_Wanna_Know.mp3")
    
      playSong2() {
        if (this.audio2.paused){
          this.audio2.play();
        } else {
         this.audio2.pause();
        }
    
        return this.audio2.paused;
      }
 
      
      audio3 = new Audio("http://localhost:8888/songs/sting.mp3")
      
        playSong3() {
          if (this.audio3.paused){
            this.audio3.play();
          } else {
           this.audio3.pause();
          }
      
          return this.audio3.paused;
        }


        audio4 = new Audio("http://localhost:8888/songs/police.mp3")
        
          playSong4() {
            if (this.audio4.paused){
              this.audio4.play();
            } else {
             this.audio4.pause();
            }
        
            return this.audio4.paused;
          }
   
 
        

 

}
