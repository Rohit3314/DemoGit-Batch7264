import { Component, OnInit } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private s1:BankingService) { }

  ngOnInit(): void {
  }
  balancedata1(balanceform : {value:any;})
  {
    return this.s1.balancedata(balanceform.value).subscribe();
  }

}
