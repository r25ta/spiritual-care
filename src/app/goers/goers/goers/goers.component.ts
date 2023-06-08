import { Component } from '@angular/core';
import { Goer } from '../../models/goer';

@Component({
  selector: 'app-goers',
  templateUrl: './goers.component.html',
  styleUrls: ['./goers.component.scss']
})
export class GoersComponent {


  goers$: Goer[] = [
                    {id: 1, name: 'Ronaldo da Conceição', phone: '983267932', born: '03/02/1978'},
                    {id: 2, name: 'Olívia Cardoso Cruz Conceição', phone: '996467373', born: '05/04/1981'},
                    {id: 3, name: 'Diego Cruz Conceição', phone: '983267932', born: '12/05/2010'},
                    {id: 4, name: 'Camila Cruz Conceição', phone: '983267932', born: '05/03/2014'}
  ];

  displayedColumns: string[] = ['id', 'name', 'phone', 'born'];
  clickedRows = new Set<Goer>();

  constructor(){
    console.log(this.goers$);
  }
}
