import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private h1:HttpClient) { }

  link1 = "http://localhost:9001/getdata";
  link2 = "http://localhost:9001/insertdata";
  link3 = "http://localhost:9001/deletedata";
  link4 = "http://localhost:9001/updatedata";


   getdata()
   {
   return this.h1.get(this.link1);
  }
   insertdata(data: any)
   {
    return this.h1.post(this.link2,data);
   }
  deletedata(data: any)
  {
    return this.h1.post(this.link3,data);
  }
   updatedata(data1: any)
   {
   return this.h1.post(this.link4,data1);
 }

}
