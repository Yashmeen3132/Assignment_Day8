import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit{

  Id:any[]
  constructor(){
    this.Id=[
      {
        dept:"Operations"
      },
      {
        dept:"Marketing"
      },
      {
        dept:"Finance"
      },
      {
        dept:"Sales"
      },
      {
        dept:"Human Resource"
      },
      {
        dept:"Purchase"
      }
    ]
  }


  ngOnInit(): void {
   
  }

}
