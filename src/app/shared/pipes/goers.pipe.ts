import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goers'
})
export class GoersPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'phone': return 'smartphone';
      case 'name': return 'face';
      case 'born': return 'airline_seat_flat';
    }
    return 'info'
  }

}
