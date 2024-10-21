import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: any[] = [];

  constructor(private storageService: StorageService) {
    this.loadEmployees();
  }

  private async loadEmployees() {
    this.employees = await this.storageService.get('employees') || [];
  }

  async getEmployees() {
    await this.loadEmployees();
    return this.employees;
  }

  async addEmployee(employee: any) {
    this.employees.push({
      id: Date.now(),
      ...employee
    });
    await this.storageService.set('employees', this.employees);
  }

  async getEmployee(id: number) {
    await this.loadEmployees();
    return this.employees.find(emp => emp.id === id);
  }
}