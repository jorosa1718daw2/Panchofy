import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
///////
import { RouterModule, Routes } from '@angular/router';
///////
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { RouteComponent } from './route/route.component';
import { SearchComponent } from './search/search.component';

///////

const route: Routes =[
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'app', component: AppComponent},
  {path: 'about', component: AboutComponent},

  
];

/////////////


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    RouteComponent,
    SearchComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  exports:[ 
    RouterModule
   ],
  providers: [],
  bootstrap: [RouteComponent]
})
export class AppModule { }
