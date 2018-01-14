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
/*

@Component({
  selector: 'dialog',
  templateUrl: 'dialog.component.html',
})

export class DialogOverviewExample {
  
    animal: string;
    name: string;
  
    constructor(public dialog: MatDialog) {}
  
    openDialog(): void {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: { name: this.name, animal: this.animal }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
  
  }
  
  @Component({
    selector: 'dialog-view',
    templateUrl: 'dialog-view.component.html',
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }*/
  
  


