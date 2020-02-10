import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { Product } from '../models/product';

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    @Input() shoppingCart: ShoppingCart;
    @Output() removeFromCart = new EventEmitter<Product>();
    @Output() scanInCashRegister = new EventEmitter<Product>();

    constructor() { }

    ngOnInit() {
        
    }

    deleteFromCart(product: Product) {
        this.removeFromCart.emit(product);
    }

    scanItem(product) {
        this.scanInCashRegister.emit(product);
    }

}
