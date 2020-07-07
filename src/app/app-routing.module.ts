import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent,canActivate:[AuthGaurdService] },
  { path: 'add', component: CreateEmployeeComponent, canActivate:[AuthGaurdService] },
  { path: 'details/:id', component: EmployeeDetailComponent, canActivate:[AuthGaurdService] },
  { path: 'edit/:id', component: EditEmployeeComponent, canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
