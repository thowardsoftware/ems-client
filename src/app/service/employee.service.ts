import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employees';
  private createUrl = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(Employee: Object): Observable<Object> {
    return this.http.post(`${this.createUrl}`, Employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
}