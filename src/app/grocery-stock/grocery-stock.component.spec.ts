import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryStockComponent } from './grocery-stock.component';

describe('GroceryStockComponent', () => {
  let component: GroceryStockComponent;
  let fixture: ComponentFixture<GroceryStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
