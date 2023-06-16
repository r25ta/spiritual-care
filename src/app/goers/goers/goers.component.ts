import { Component } from '@angular/core';
import { Goer } from '../models/goer';
import { GoersService } from '../services/goers.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-goers',
  templateUrl: './goers.component.html',
  styleUrls: ['./goers.component.scss'],
})
export class GoersComponent {
  goers$: Observable<Goer[]>;
  displayedColumns: string[] = ['id', 'name', 'phone', 'born'];
  clickedRows = new Set<Goer>();

  //INJECT SERVICE CLASS INTO CONSTRUCTOR OF THE COMPONENT CLASS
  constructor(goersService: GoersService
              ,public dialogError: MatDialog) {

    /*THIS METHOD CONNECTS WITH THE API REST, IF ANY PROBLEM OCCURS WITH THE API,
    THIS IMPLEMENTATION CATCHES THE COMMUNICATION ERROR
    AND SENDS A CUSTOM ERROR MESSAGE TO THE METHOD openDialogError.
    */
    this.goers$ = goersService.listAll().pipe(catchError((err) => {
      this.openDialogError('List of Goers unavailable, connection failure!');
      return of([]);
    }),
    );
  }
  /*This method is responsible for activate the ErrorDialogComponent component
    passing as parameter custom error message of string type.
    The component ErrorDialogComponent is responsible to opening Dialog Box with the custom error message*/
  openDialogError(errorMsg: string) {
    this.dialogError.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }
}
