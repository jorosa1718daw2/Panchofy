import { Component, Inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

interface UserResponse {
  nombre: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

 
}

  


