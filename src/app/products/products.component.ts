import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array <Product>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {

      this.productService.getProducts().subscribe(res => {
        this.products = res;
      });

  }

}
