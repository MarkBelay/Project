import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/Employee';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  id:number=0
  //Id:number=0
emp:Employee={id:0,
  name:'',
  username:'',
  email:'',
  address:{street:'',suite:'',city:'',zipcode:'',
    geo:{lat:'',lng:''}},
  phone:'',
  website:'',
  company:{name:'',catchPhrase:'',bs:''}
  }
  Emp:Employee={id:0,
    name:'',
    username:'',
    email:'',
    address:{street:'',suite:'',city:'',zipcode:'',
      geo:{lat:'',lng:''}},
    phone:'',
    website:'',
    company:{name:'',catchPhrase:'',bs:''}
    }
employees:Employee[]=[]
  constructor(private userService:EmployeeService) { }
  // userList(){
  //     this.userService.getUsers().subscribe((items)=>{
  //        this.employees=items
  //      })
  //   }

  getUser(){
    this.userService.getUsers().subscribe((items)=>{
      this.employees=items
    })
 
  }
  
  addUser(){
    this.userService.postUser(this.emp).subscribe((emp)=>{
      this.employees.push(emp)
    })
  }
  deleteUser(){
    
    this.userService.deleteUser(this.id).subscribe(()=>{
      this.employees.pop()
    })
    
    
  }
  updateUser(){
    //this.Emp.id=this.Id
    this.userService.updateUser(this.Emp).subscribe((emp)=>{
      emp=this.Emp
    })
  }

  ngOnInit(): void {
    this.getUser()
    
  }

}
