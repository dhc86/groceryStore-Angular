// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StockComponent } from './stock/stock.component';
import { GroceryStoreComponent } from './grocery-store/grocery-store.component';
//services
import { ProductService } from './services/product.service';
import { CashRegisterComponent } from './cash-register/cash-register.component';

@NgModule({
	declarations: [
		AppComponent,
		ShoppingCartComponent,
		StockComponent,
		GroceryStoreComponent,
		CashRegisterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [
		ProductService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
