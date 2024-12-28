import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textterm',
  standalone: true
})
export class TexttermPipe implements PipeTransform {

  transform(value: string, limit: number): unknown {
    return value.split(" ",limit ).join(" ");
  }

}
