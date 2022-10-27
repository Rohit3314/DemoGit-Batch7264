import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  data: any;

  constructor(private s1:EmployeeService) { }

  ngOnInit(): void {

    let response = this.s1.getdata();
  
    response.subscribe((data1)=>this.data=data1);
  }
  
}
