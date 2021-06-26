import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'addPrefix'
})
export class AddPrefixPipe implements PipeTransform {

  transform(value: number, prefix: string): string {
    if (value < 10) {
      return prefix + value;
    }
    return value.toString();
  }

}
