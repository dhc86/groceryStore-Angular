import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
	selector: 'app-stock',
	templateUrl: './stock.component.html',
	styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
	@Input() products: Product[];
	@Output() addToCart = new EventEmitter<Product>();

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
	}

	addProductToCart(product: Product) {
		this.addToCart.emit(product);
	}	
}
