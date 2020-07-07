import { Employee } from '../../model/Employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-class',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;

  constructor(
    private employeeService: EmployeeService, 
    private router: Router
  ) { }

  /* I'm creating a new employee and adding it in the database 
  using rest call. */ 

  ngOnInit() { }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee(); 
  }

  onSubmit() {
    if(confirm("Are you ready to add this employee?")){
      this.submitted = true;
      this.save(); 
    }   
  }

  // Get all employees
  getEmployees(){
    this.router.navigate(['/']); 
  }

}
