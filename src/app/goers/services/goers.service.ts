import { Injectable } from '@angular/core';
import { Goer } from '../models/goer';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoersService {
  private readonly API: string = '../../../assets/goers.json';

  //Injection Dependence
  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<Goer[]> {
    return this.httpClient.get<Goer[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((goers) => console.log(goers))
    );
  }
}
