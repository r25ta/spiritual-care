import { Component } from '@angular/core';

import { Worker } from '../models/worker';
import { WorkersService } from '../services/workers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})


export class WorkersComponent {

  workers$: Observable<Worker[]>;

  displayedColumns: string[] = ['id','name','nickName', 'phone', 'born'];
  clickedRows = new Set<Worker>();

  //
  constructor(workerService: WorkersService){
    this.workers$ = workerService.listAllWorkers();

  }
}
