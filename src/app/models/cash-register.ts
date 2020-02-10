import { Product } from './product';

export class CashRegister {
    items: Product[] = [];

    constructor(items: Product[]) {
        this.items = items;
    }

    totalItemsCount() {
        return this.items.length;
    }

    subTotalPrice() {
        let sum = 0;
        this.items.forEach((item: Product) => sum = sum + item.getTotalPrice());
        return sum;
    }

    getTax() {
        return 10;
    }

    totalPrice() {
        // adding 10% tax
        return this.subTotalPrice() + (this.subTotalPrice() * 0.1);
    }
}