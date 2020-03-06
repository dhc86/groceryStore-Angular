import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-grocery-employees',
  templateUrl: './grocery-employees.component.html',
  styleUrls: ['./grocery-employees.component.scss']
})
export class GroceryEmployeesComponent implements OnInit {
  employees: Array<Employee>;
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((employees)=> {
      this.employees = employees;
    })
  }

}
