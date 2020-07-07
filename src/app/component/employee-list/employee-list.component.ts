import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Employee } from "../../model/Employee";
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  private baseUrl = 'http://localhost:8080/api/employees';
  public data: Object;
  public temp_var: Object=false;
  employees: Observable<Employee[]>;
  

  constructor(private employeeService: EmployeeService, private router: Router,
    private http: HttpClient) {}


    /* Updated Copy
    I have injected dependency modules and will create a HTTP request 
    to get all datas from server using rest call.I will store data into a 
    variable which will use later on html file to iterate records.
    */
    
  ngOnInit(): void {
    this.getEmployees();
    this.http.get(this.baseUrl).subscribe((res: Response) => {
        this.data = res;
        this.temp_var = true;
      });
  }
  
  // Get employee list
  getEmployees() {
    this.employees = this.employeeService.getEmployeeList();
    console.log(this.employees);
  }

  // Delete employee
  deleteEmployee(id: number) {
    if(confirm("Are you sure you want to delete this employee?")){
      // Call delete method from service (rest call)
      this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit(); // Refresh table after delete
        },
       error => console.log(error));
    }
  }

  // Get employee details
  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  // Edit employee
  editEmployee(id: number){
    this.router.navigate(['edit', id]);
  }
} 
