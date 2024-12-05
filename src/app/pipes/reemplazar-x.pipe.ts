import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, isBattle: boolean = false): string {
    if (!value) return '';

    if (isBattle) {
      return value.replace(/\b\w/g, (char) => char.toUpperCase());
    }


    return value
      .toUpperCase()
      .replace(/[aA]/g, 'x')
      .replace(/[oO]/g, 'x');
  }
}
