import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
/*import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';*/
//cambiar
import {HttpModule} from '@angular/http';
// import {CdkTableModule} from '@angular/cdk/table';
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
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  exports:[ 
    RouterModule,
    // CdkTableModule,
   /* MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,*/
    BrowserModule,
    FormsModule,
    HttpModule,
   // DemoMaterialModule,
    // MatNativeDateModule,
   // ReactiveFormsModule,
   ],
  //  entryComponents: [DialogOverviewExample, DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [RouteComponent]
})
export class AppModule { }
