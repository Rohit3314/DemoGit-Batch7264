import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  eid!: number;
  ename!:String;
  edept!:String;
  esalary!:number;
  constructor(private s1:EmployeeService) { }

  ngOnInit(): void {
  }

    insertdata1(insertform: {value: any;})
   {
      return this.s1.insertdata(insertform.value).subscribe();
   }
  

}
