import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private s1:EmployeeService) { }

  ngOnInit(): void {
  }
  deletedata1(deleteform: {value:any;})
   {
        return this.s1.deletedata(deleteform.value).subscribe();
   }

}
