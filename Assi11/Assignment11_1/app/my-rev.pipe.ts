import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    let len = value.length;
    let Rev = "";

    for (let index = len - 1; index >= 0; index--) {
      Rev += value[index];
    }


    return Rev;
  }

}
