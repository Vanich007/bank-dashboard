import { InvoiceEnumType, InvoiceType } from './../../types';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cutArray' })
export class CutArrayPipe implements PipeTransform {
  transform(array: InvoiceType[], type: string): InvoiceType[] {
    if (type === 'none') return array;
    return array.filter((i) => i.invoiceType === type);
  }
}
