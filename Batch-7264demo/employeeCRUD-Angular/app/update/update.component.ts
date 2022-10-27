import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  eid!: number;
  ename!:String;
  edept!:String;
  esalary!:number;
  constructor(private s1:EmployeeService) { }

  ngOnInit(): void {
  }

  updatedata1(updateform: {value: any;})
  {
     return this.s1.updatedata(updateform.value).subscribe();
  }

}
