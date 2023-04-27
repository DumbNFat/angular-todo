import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'header'
})
export class HeaderPipe implements PipeTransform {

  transform(value: any) {
    return value.toUpperCase();
  }

}

