import { Component } from '@angular/core';

import { Worker } from '../models/worker';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})


export class WorkersComponent {

  workers$: Worker[] = [
    {id: 1, name: 'Allan Kardec', nickName: 'Kardec', phone: '1199326-7932', born: '03/10/1804'},
    {id: 2, name: 'André Luiz', nickName: '', phone: '1198326-7979', born: '03/02/1879'},
    {id: 3, name: 'Francisco Candido Xavier', nickName: 'Chico Xavier', phone: '1198388-7932', born: '02/04/1910'},
    {id: 4, name: 'Madre Teresa de Calcutá', nickName: 'Madre Teresa', phone: '1198326-7952', born: '26/08/1910'},
    {id: 5, name: 'Mahatma Gandhi', nickName: 'Gandhi', phone: '1198326-7934', born: '02/10/1883'}
  ];

  displayedColumns: string[] = ['id','name','nickName', 'phone', 'born'];
  clickedRows = new Set<Worker>();

  constructor(){
    console.log(this.workers$);
  }
}
