import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/Employee';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  id: number;

  constructor(
    private route: ActivatedRoute, 
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  /* Using a rest call from the service, I'm accessing the data of
  a single employee by their id and populating it in an html form. 
  The data can be edited and a new/updated employee will be created. */

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  newClass(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  edit() {
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  onSubmit() {
    if(confirm("Are you ready to update the employee details?")){
    this.submitted = true;
    this.edit();    
    }
  }

  // Get all employees
  getEmployees(){
    this.router.navigate(['/']); 
  }

}
