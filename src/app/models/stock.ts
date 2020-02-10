import { Product } from './product';

export class Stock {
    items: Product[] = [];

    constructor() { }

    get totalItemsCount() {
        return this.items.length;
    }
}