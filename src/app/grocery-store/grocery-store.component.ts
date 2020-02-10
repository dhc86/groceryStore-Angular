import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { ProductService } from '../services/product.service';
import { CashRegister } from '../models/cash-register';
import { Product } from '../models/product';

@Component({
	selector: 'grocery-store',
	templateUrl: './grocery-store.component.html',
	styleUrls: ['./grocery-store.component.scss']
})
export class GroceryStoreComponent implements OnInit {
	shoppingCart = new ShoppingCart([]);
	products: Array<object>;
	cashRegister = new CashRegister([]);

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.getAvailableStock();
	}

	addProductToCart(p: Product) {
		p.removeUnit();
		if (this.shoppingCart.items.length === 0) {
			let newItem = new Product(p.id, p.name, p.price, p.imageUrl, p.weight, p.soldBy, 1, false);
			this.shoppingCart.items.push(newItem);
		}
		else {
			let item = this.shoppingCart.items.find((item: Product) => item.name === p.name && !item.isScanned);
			(item) ? item.addUnit() :
				this.shoppingCart.items.push(new Product(p.id, p.name, p.price, p.imageUrl, p.weight, p.soldBy, 1, false));
		}
	}


	backToStock(product: Product) {
		product.removeUnit();
		this.products.find((item: Product) => {
			if(item.name === product.name) {
				item.addUnit();
			}
		});
	}

	checkOutItem(product: Product) {
		product.scanItem();
		this.cashRegister.items.push(product);
	}

	removeFromShoppingCart(product: Product) {
		this.shoppingCart.items = this.shoppingCart.items.filter((p) => {
			if (p.id !== product.id) { return p; }
		});
	}

	getAvailableStock() {
		this.productService.getProducts().subscribe(res => {
			this.products = res;
		});
	}
}
