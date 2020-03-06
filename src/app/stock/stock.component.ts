import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { MessageService } from '../services/message.service';

@Component({
	selector: 'app-stock',
	templateUrl: './stock.component.html',
	styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
	@Input() products: Product[];
	@Output() addToCart = new EventEmitter<Product>();
  message: string;

	constructor(
    private productService: ProductService,
    private messsageService: MessageService
	) { }

	ngOnInit() {
    this.messsageService.currentMessage.subscribe(message => this.message = message);
	}

	addProductToCart(product: Product) {
		this.addToCart.emit(product);
	}
}
