import { Component, OnInit } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  
  data:any;
  constructor(private s1:BankingService) { }

  ngOnInit(): void {

    let response = this.s1.getdata();
  
    response.subscribe((data1)=>this.data=data1);
  }

}
