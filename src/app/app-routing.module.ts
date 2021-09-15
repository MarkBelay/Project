import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { GetEmployeeComponent } from './get-employee/get-employee.component';

const routes:Routes=[{path:'', component:GetEmployeeComponent}]

@NgModule({
  declarations: [],
  
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    
    
  
})
export class AppRoutingModule { }
