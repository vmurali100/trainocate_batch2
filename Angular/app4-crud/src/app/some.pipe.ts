import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'some'
})
export class SomePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
