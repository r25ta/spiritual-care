import { Component } from '@angular/core';

import { Worker } from '../models/worker';
import { WorkersService } from '../services/workers.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class WorkersComponent {
  workers$: Observable<Worker[]>;

  displayedColumns: string[] = ['id', 'name', 'nickName', 'phone', 'born'];
  clickedRows = new Set<Worker>();

  //
  constructor(workerService: WorkersService, public dialog: MatDialog) {
    this.workers$ = workerService.listAllWorkers().pipe(
      catchError((err) => {
        this.openDialogError(
          'List of Workers unavailable, connection failure!'
        );
        return of([]);
      })
    );
  }

  openDialogError(msgError: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: msgError,
    });
  }
}
