import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryEmployeesComponent } from './grocery-employees.component';

describe('GroceryEmployeesComponent', () => {
  let component: GroceryEmployeesComponent;
  let fixture: ComponentFixture<GroceryEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
