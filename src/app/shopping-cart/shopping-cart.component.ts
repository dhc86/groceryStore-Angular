import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { Product } from '../models/product';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    @Input() shoppingCart: ShoppingCart;
    @Output() removeFromCart = new EventEmitter<Product>();
    @Output() scanInCashRegister = new EventEmitter<Product>();
    message: string;

    constructor(
      private messsageService: MessageService
    ) { }

    ngOnInit() {
      this.messsageService.currentMessage.subscribe(message => this.message = message);
    }

    deleteFromCart(product: Product) {
        this.removeFromCart.emit(product);
    }

    scanItem(product) {
        this.scanInCashRegister.emit(product);
    }

    updateMessage(){
      this.messsageService.changeMessage("Hello there!!");
    }
}
