import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'slugTranslate'
})
export class SlugPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    const a = {
      'Ё': 'YO',
      'Й': 'I',
      'Ц': 'TS',
      'У': 'U',
      'К': 'K',
      'Е': 'E',
      'Н': 'N',
      'Г': 'G',
      'Ш': 'SH',
      'Щ': 'SCH',
      'З': 'Z',
      'Х': 'H',
      'Ъ': 'Y',
      'ё': 'yo',
      'й': 'i',
      'ц': 'ts',
      'у': 'u',
      'к': 'k',
      'е': 'e',
      'н': 'n',
      'г': 'g',
      'ш': 'sh',
      'щ': 'sch',
      'з': 'z',
      'х': 'h',
      'ъ': 'y',
      'Ф': 'F',
      'Ы': 'I',
      'В': 'V',
      'А': 'a',
      'П': 'P',
      'Р': 'R',
      'О': 'O',
      'Л': 'L',
      'Д': 'D',
      'Ж': 'ZH',
      'Э': 'E',
      'ф': 'f',
      'ы': 'i',
      'в': 'v',
      'а': 'a',
      'п': 'p',
      'р': 'r',
      'о': 'o',
      'л': 'l',
      'д': 'd',
      'ж': 'zh',
      'э': 'e',
      'Я': 'Ya',
      'Ч': 'CH',
      'С': 'S',
      'М': 'M',
      'И': 'I',
      'Т': 'T',
      'Ь': '\'',
      'Б': 'B',
      'Ю': 'YU',
      'я': 'ya',
      'ч': 'ch',
      'с': 's',
      'м': 'm',
      'и': 'i',
      'т': 't',
      'ь': 'u',
      'б': 'b',
      'ю': 'yu'
    };
    if (value) {
      let previousChar = ''
      return value.split('')
        .map((char) => {
          let word = a[char] || char
          char = this.replaceForUrl(word);

          if (char === '-' && previousChar === '-') {
            return ''
          } else {
            previousChar = char
          }
          return a[char] || char;
        }).join('').toLowerCase();
    } else {
      return ''
    }
  }

  private replaceForUrl(word) {
    return word.replace(/[\W_]+/g, '-')
  }

}
