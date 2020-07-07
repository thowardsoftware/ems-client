import { Employee } from '../../model/Employee';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  /* Using a rest call from the service, I'm accessing the data of
  a single employee by their id and rendering it in html. */ 

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  // Get all employees
  getEmployees(){
    this.router.navigate(['/']); 
  }

}
