import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combinedstop'
})
export class CombinedstopPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
