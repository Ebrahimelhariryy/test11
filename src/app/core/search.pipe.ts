import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(product: any[], word: string): any[] {
    return product.filter((item)=> item.title.toLowerCase().includes(word.toLowerCase()));
  }

}
