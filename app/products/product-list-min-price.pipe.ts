import {  PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './prod';

@Pipe({
    name: 'productFilterMinPricePipe'
})
export class ProductFilterMinPricePipe implements PipeTransform {

    transform(value: IProduct[], filter: number): IProduct[] {
        filter = filter ? filter : 0;
        return filter ? value.filter((product: IProduct) =>
            product.price>= filter) : value;
    }
}