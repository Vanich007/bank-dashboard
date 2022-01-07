import { InvoiceType } from './../../types';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cutArray' })
export class CutArrayPipe implements PipeTransform {
  transform(array: InvoiceType[], type: number): InvoiceType[] {
    if (type === 2) return array;
    return array.filter((i) => i.invoiceType === type);
  }
}
