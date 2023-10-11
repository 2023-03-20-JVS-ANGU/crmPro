import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(val: number, tva?: number): number | null {
    console.log('performant')
    if(tva){
      return val + (val*tva/ 100);
    }
    return null
  }

}
