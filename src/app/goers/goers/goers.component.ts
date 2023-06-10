import { Component } from '@angular/core';
import { Goer } from '../models/goer';
import { GoersService } from '../services/goers.service';
import { Observable } from 'rxjs';
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
  constructor(goersService: GoersService) {
    this.goers$ = goersService.listAll();
  }
}
