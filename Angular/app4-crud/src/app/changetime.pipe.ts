import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changetime'
})
export class ChangetimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args)
    return null;
  }

}
