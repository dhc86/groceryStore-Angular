// modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
// components
import { AppComponent } from "./app.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { StockComponent } from "./stock/stock.component";
import { GroceryStoreComponent } from "./grocery-store/grocery-store.component";
//services
import { ProductService } from "./services/product.service";
import { MessageService } from "./services/message.service";
import { EmployeeService } from "./services/employee.service";
import { CashRegisterComponent } from "./cash-register/cash-register.component";
import { WelcomeMessageComponent } from "./welcome-message/welcome-message.component";
import { GroceryCheckoutComponent } from "./grocery-checkout/grocery-checkout.component";
import { GroceryEmployeesComponent } from "./grocery-employees/grocery-employees.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    StockComponent,
    GroceryStoreComponent,
    CashRegisterComponent,
    WelcomeMessageComponent,
    GroceryCheckoutComponent,
    GroceryEmployeesComponent,
    NotFoundComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeMessageComponent },
      { path: 'store', component: GroceryStoreComponent },
      { path: 'employees', component: GroceryEmployeesComponent },
      { path: 'products/:name/:id', component: ProductComponent },
      { path: 'products', component: ProductsComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    ProductService,
    MessageService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
