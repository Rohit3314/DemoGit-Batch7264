import { Component, OnInit } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private s1:BankingService) { }

  ngOnInit(): void {
  }
  depositdata1(depositform : {value:any;})
  {
    return this.s1.depositdata(depositform.value).subscribe();
  }

}
