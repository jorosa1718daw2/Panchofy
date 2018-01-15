import { Component, Inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { fadeInAnimation } from './_animations/index';
import { slideInOutAnimation } from './_animations/index';




interface UserResponse {
  nombre: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AppComponent {
  title = 'app';


}







