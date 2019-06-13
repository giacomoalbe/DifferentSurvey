import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value instanceof Array || value instanceof String) {
      return value.length;
    } else {
      return 0;
    }
  }

}
