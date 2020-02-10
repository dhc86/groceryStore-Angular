import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { of } from 'rxjs';
// import { UnitProduct } from '../models/unit-product';
// import { WeightedProduct } from '../models/weighted-product';

@Injectable({
	providedIn: 'root'
})

export class ProductService {
	products: Array<any> = [
		{ id: '1', name: 'Cheerios', price: 6.99, imageUrl: 'www.image.com/url.3', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false },
		{ id: '2', name: 'Apple', price: 2.49, imageUrl: 'www.image.com/url.3', weight: 0.33, soldBy: 'weight', quantity: 10, isScanned: false },
		{ id: '3', name: 'Banana', price: 0.99, imageUrl: 'www.image.com/url.3', weight: 1.1, soldBy: 'weight', quantity: 10, isScanned: false },
		{ id: '4', name: 'Cheese', price: 4.99, imageUrl: 'www.image.com/url.1', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false },
		{ id: '5', name: 'Pepsi', price: 2.50, imageUrl: 'www.image.com/url.1', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false },
		{ id: '6', name: 'Milk', price: 2.99, imageUrl: 'www.image.com/url.3', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false },
		{ id: '1', name: 'Broccoli', price: 2.60, imageUrl: 'www.image.com/url.3', weight: 0.5, soldBy: 'weight', quantity: 10, isScanned: false },
		{ id: '2', name: 'Mango', price: 2.49, imageUrl: 'www.image.com/url.3', weight: 0.7, soldBy: 'weight', quantity: 10, isScanned: false },
		{ id: '3', name: 'Eggs', price: 3.50, imageUrl: 'www.image.com/url.3', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false },
		{ id: '4', name: 'Coffee', price: 6.50, imageUrl: 'www.image.com/url.1', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false },
		{ id: '5', name: 'Water', price: 2.50, imageUrl: 'www.image.com/url.1', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false },
		{ id: '6', name: 'Sugar', price: 4.99, imageUrl: 'www.image.com/url.3', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false }
	];

	constructor() { }

	getProducts() {
		// mock data by creating instances of Product class
		return of(this.products.map(
			(p: Product) => new Product(p.id, p.name, p.price, p.imageUrl, p.weight, p.soldBy, p.quantity, p.isScanned)
		));
	}

	removeProduct(product: Product) {
		// remove a product from stock
		this.products = this.products.filter((p) => {
			if (p.id !== product.id) { return p; }
		});
	}

	addProduct(product: Product) {
		// return product to stock
		this.products.push(product);
	}
}

