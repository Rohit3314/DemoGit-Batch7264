import { Component, OnInit } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-withdrawl',
  templateUrl: './withdrawl.component.html',
  styleUrls: ['./withdrawl.component.css']
})
export class WithdrawlComponent implements OnInit {

  constructor(private s1:BankingService) { }

  ngOnInit(): void {
  }
  withdrawdata1(withdrawlform:{value:any;})
  {
     return this.s1.withdrawdata(withdrawlform.value).subscribe();
  }

}
