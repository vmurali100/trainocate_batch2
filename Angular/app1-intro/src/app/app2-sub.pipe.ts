import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'app2Sub'
})
export class App2SubPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
