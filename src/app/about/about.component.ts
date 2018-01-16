import { Component, OnInit, Pipe, Directive, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrdenarPipe } from './sortPipe';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { fadeInAnimation, slideInOutAnimation } from '../_animations/index';




interface Alumne {
  artista: string;
  album: string;
  genero: string;
  descripcion: string;
  song: string;
}

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }

})
export class AboutComponent {

  private alumnes: Alumne[];



  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inicialitzarAlumnes();
  }

  private inicialitzarAlumnes() {
    this.alumnes = [
      {
        artista: 'Arctic Monkeys',
        album: 'AM',
        genero: 'Indie Rock',
        descripcion: "Arctic Monkeys es una banda británica de indie rock, formada en Sheffield, Reino Unido.3​ El grupo está compuesto por el guitarrista principal y vocalista Alex Turner, el guitarrista Jamie Cook, el baterista Matt Helders, y con Nick O'Malley en el bajo. Su primer álbum, Whatever People Say I Am, That's What I'm Not, fue galardonado en 2007 como el «mejor álbum británico».4​ El segundo álbum de la banda, Favourite Worst Nightmare, se lanzó el 23 de abril de 2007 y vendió más de 225 000 copias en su primera semana de lanzamiento, además de ser nominado para el Mercury Prize de 2007.5​ El quinto y más exitoso álbum de la banda, es conocido como AM, es el más vendido, con salida el 15 de julio de 2013. La banda también ganó los premios a mejor banda británica y mejor álbum británico en los Brit Awards de 2008 y 2014.",
        song: 'Arctic Monkeys Do I Wanna Know'
      }, {
        artista: 'Metallica',
        album: 'And Justice For All',
        genero: 'Thrash Metal',
        descripcion: "Metallica es una banda de thrash metal estadounidense originaria de Los Ángeles, pero con base en San Francisco desde febrero de 1983. Fue fundada en 1981 en Los Ángeles por Lars Ulrich y James Hetfield, a los que se les unirían Dave Mustaine y Ron McGovney. Estos dos músicos fueron después sustituidos por el guitarrista Kirk Hammett y el bajista Cliff Burton, Dave Mustaine fue despedido un año después de ingresar en la banda debido a su excesiva adicción al alcohol y su actitud violenta, y fundó la banda Megadeth, siendo sustituido por Kirk Hammett ex guitarrista de Exodus.Bajista actual, Robert Trujillo. A la fecha, la banda ha editado 10 álbumes de estudio, siendo el último de estos  Hardwired...To Self-Destruct, el cual fue lanzado mundialmente el 18 de noviembre del 2016. Las ventas totales de Metallica superan los 120 millones,2​ y se les considera parte de los cuatro grandes del thrash metal, junto con Megadeth, Slayer y Anthrax.3​ Además, el grupo ha conseguido numerosos premios musicales, entre los que destacan nueve Grammys, dos premios otorgados por la cadena musical MTV, dos galardones de la Academia de Música Americana (American Music Awards) y dos premios de la revista Billboard, además de poseer una estrella en el Paseo de la Fama de la revista Kerrang!. ",
        song: 'The Shortest Straw'
      },
      {
        artista: 'Sting',
        album: 'Ten Summoner\'s Tale',
        genero: 'Rock',
        descripcion: "Gordon Matthew Thomas Sumner, CBE (Wallsend, 2 de octubre de 1951), más conocido como Sting, es un músico británico que se desempeñó inicialmente como bajista, y más tarde como cantante y bajista del grupo musical The Police. También ha dado su toque personal a algunas canciones renacentistas junto a laudistas profesionales. Como miembro de The Police y como solista, Sting ha vendido más de cien millones de discos,1​ ha recibido más de dieciséis Premios Grammy por su trabajo, recibiendo el primero por «mejor interpretación de rock instrumental» en 1981, y obtuvo una nominación a los premios Óscar por «mejor canción».2​3​",
        song: 'Shape of My Heart'

      },
      {
        artista: 'The Police',
        album: 'Synchronicity',
        genero: 'Rock',
        descripcion: "The Police fue un importante e influyente trío británico de rock activo desde finales de la década de 1970 hasta mediados de la década de 1980, bajo el formato de power trio. Su estilo musical estuvo marcado por influencias del rock, reggae y jazz. Se formó en el año 1977 en Londres, tocaron oficialmente hasta 1986, con una pausa entre marzo de 1984 hasta julio de 1986 y nunca emitieron un comunicado sobre su disolución. La banda ha vendido casi 70 millones de copias por el mundo. Liderados por Gordon Matthew Sumner, más conocido como Sting (nombre que significa aguijón en inglés, y que deriva de un jersey de rugby a rayas amarillas y negras, estilo avispa, que el bajista siempre llevaba puesto en su juventud), Andy Summers en la guitarra, y Stewart Copeland como baterista, The Police fue el conjunto New Wave más popular de los 80's gracias a su impetuoso pop-rock new wave enriquecido por algunas dosis de reggae y un talento instrumental y compositivo sublime; y también gracias a que fue la única banda New Wave que en sus giras fue más allá del área Europa-Estados Unidos, contribuyendo de esta manera a globalizar la renovación de la música Rock-Pop.",
        song: 'Every Breath You Take'

      }
     
    ];
  }
  public anarDetall(id) {
    this.router.navigate(['/detall', id, this.alumnes[id]]);
  }

  public ordenarPerNom() {
    this.alumnes.sort().reverse();
  }




}
@Component({
  templateUrl: 'detail.html',
  styleUrls: ['about.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class DetailComponent {

  private id: string;
  private artista: string = 'sergi';
  private album: string = '11';
  private genero: string;
  private descripcion: string;
  private song: string = "";
  private sub: any;      // -> Subscriber

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    
    // get URL parameters
    this.sub = this.route
      .params
      .subscribe(params => {
        this.id = params['id'];
        this.artista = params['artista'];
        this.album = params['album'];
        this.genero = params['genero'];
        this.descripcion = params['descripcion'];
        this.song = params['song'];
        
      });


  };
  

  audio = new Audio('http://localhost:8888/songs/police.mp3');

  playSong() {
    if (this.audio.paused){
      this.audio.play();
    } else {
     this.audio.pause();
    }

    return this.audio.paused;
  }

}

