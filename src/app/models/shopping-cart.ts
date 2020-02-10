import { Product } from './product';

export class ShoppingCart {
    items: Product[] = [];

    constructor(items: Product[]) {
        this.items = items;
    }

    totalItemsCount() {
        let totalItems = 0;
        this.items.forEach((items: Product) => totalItems = totalItems + items.quantity);
        return totalItems;
    }
    
    totalPrice(){
        let sum = 0;
        this.items.forEach((items: Product) => sum = sum + items.getTotalPrice());
        return sum;
    }
}