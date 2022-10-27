import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BankingService {

  link = "http://localhost:9001/withdrawl";
  link1 = "http://localhost:9001/view";
  link3 = "http://localhost:9001/viewdata";
  link4 = "http://localhost:9001/depositdata";
  link5 = "http://localhost:9001/deletedata";

  constructor(private h1:HttpClient) { }

  withdrawdata(data: any)
  {
    return this.h1.post(this.link,data);
  }
  balancedata(data:any)
  {
     return this.h1.post(this.link1,data);
  }
  getdata()
   {
   return this.h1.get(this.link3);
  }

  depositdata(data:any)
  {
    return this.h1.post(this.link4,data);
  }
  deletedata(data:any)
  {
    return this.h1.post(this.link5,data);
  }

}
