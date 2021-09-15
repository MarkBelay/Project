import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable}from "rxjs"
import {Employee} from "../Model/Employee"
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  userAPI:string='http://localhost:3000/employeeList'
  
  constructor(private http:HttpClient) { }
  getUsers():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.userAPI}`)

  }
  updateUser(emp:Employee):Observable<Employee>{
    
      const url=`${this.userAPI}/${emp.id}`
    
      return this.http.put<Employee>(url,emp)
    }
  
  postUser(usr:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.userAPI}`,usr)
  }
  deleteUser(id:number):Observable<Employee>{
    
    return this.http.delete<Employee>(`${this.userAPI}/${id}`)
  }
  
}
