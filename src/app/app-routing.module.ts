import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path : 'Departments',component:DepartmentsComponent},
  {path:'Employee', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DepartmentsComponent, EmployeeComponent]