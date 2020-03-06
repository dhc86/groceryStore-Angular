import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/combineLatest'

@Component({
  selector: 'app-grocery-stock',
  templateUrl: './grocery-stock.component.html',
  styleUrls: ['./grocery-stock.component.scss']
})
export class GroceryStockComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe((params)=> {
      let page = params.get('page');
      let order = params.get('order')
      console.log(page + " - " + order);
    })

  }

}
