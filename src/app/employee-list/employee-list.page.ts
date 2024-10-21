import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit {
  employees: any[] = [];
  newEmployee = {
    name: '',
    position: ''
  };

  constructor(private employeeService: EmployeeService) {}

  async ngOnInit() {
    await this.loadEmployees();
  }

  async loadEmployees() {
    this.employees = await this.employeeService.getEmployees();
  }

  async addEmployee() {
    if (this.newEmployee.name && this.newEmployee.position) {
      await this.employeeService.addEmployee(this.newEmployee);
      this.newEmployee = { name: '', position: '' };
      await this.loadEmployees();
    }
  }
}