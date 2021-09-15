import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/Employee';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input() usr:Employee={id:0,
name:'',
username:'',
email:'',
address:{street:'',suite:'',city:'',zipcode:'',
  geo:{lat:'',lng:''}},
phone:'',
website:'',
company:{name:'',catchPhrase:'',bs:''}
}
  constructor() { }

  ngOnInit(): void {
  }

}
