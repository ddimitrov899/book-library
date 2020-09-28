import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], callback: string): any {
    if (items && callback) {
      const regexp = new RegExp(callback.toLowerCase(), 'g');
      const search = [];
      items.map((keyItems) => {
        for (const i in keyItems) {
          if (i === 'Title'&& regexp.exec(keyItems[i].toString().toLowerCase())) {
            return search.push(keyItems);
          }
        }

        if (keyItems.value) {
          for (const i of Object.values(keyItems.value)) {
            if (i && regexp.exec(i.toString().toLowerCase())) {
              return search.push(keyItems);
            }
          }
        }
      });
      localStorage.setItem('search-title', callback)
      return search;
    }
    localStorage.setItem('search-title', callback)
    return items;
  }

}
