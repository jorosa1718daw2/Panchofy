import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import {HttpModule} from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
///////
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent, DetailComponent } from './about/about.component';
import { RouteComponent } from './route/route.component';
import { SearchComponent } from './search/search.component';

///////

const route: Routes =[
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'app', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detall/:id', component: DetailComponent},

  
];

/////////////


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    RouteComponent,
    SearchComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports:[ 
    RouterModule,
   
    BrowserModule,
    FormsModule,
    HttpModule,
   
  
   ],
  providers: [],
  bootstrap: [RouteComponent]
})
export class AppModule { }
