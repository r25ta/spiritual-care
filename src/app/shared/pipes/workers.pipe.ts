import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workers'
})
export class WorkersPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'name': return 'face';
      case 'nickName': return 'badge';
      case 'phone': return 'smartphone';
      case 'born': return 'airline_seat_flat';
    }
    return 'info';
  }

}
