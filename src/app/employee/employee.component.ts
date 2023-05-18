import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
    Data:any[]
    constructor(){
      this.Data=[
        {
          Name:"Zara",
          EmpId:"1456",
          Shift:"Night"
        },
        {
          Name:"Zain",
          EmpId:"3452",
          Shift:"Day"
        },
        {
        Name:"John",
          EmpId:"9292",
          Shift:"Night"
        },
        {
          Name:"Matt",
          EmpId:"5674",
          Shift:"Day"
        },
        {
          Name:"Jessica",
          EmpId:"8462",
          Shift:"Day"
        }
      ]
    }
          ngOnInit(): void {
            
          }
        }