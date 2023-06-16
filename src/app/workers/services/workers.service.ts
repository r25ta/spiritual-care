import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Worker } from '../models/worker';

@Injectable({
  //Allow service class to be project-wide view
  providedIn: 'root',
})
export class WorkersService {
  private readonly API: string = '../../../assets/Xworkers.json';

  //Injection HttpClient (ajax) into of the constructor service class
  constructor(private httpClient: HttpClient) {}

  //Method listAllWorkers returns the worker list
  listAllWorkers() {
    return this.httpClient.get<Worker[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((workers) => console.log(workers))
    );
  }
}
