import { Component, OnInit , OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
	id: Number;
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('id');

    // if user will navigate throw products, then we can use
		// console.log("ProductComponent OnInit...");
		// this.route.paramMap.subscribe(params => {
		// 	this.id = +params.get("id");
		// 	console.log(this.id);
		// });
  }

	ngOnDestroy() {
		console.log('ShoppingCartComponent is destroid');
	}
}
