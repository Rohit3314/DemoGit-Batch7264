import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { DepositComponent } from './deposit/deposit.component';
import { ViewComponent } from './view/view.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { WithdrawlComponent } from './withdrawl/withdrawl.component';

const routes: Routes = [
  {path: 'Deposit', component:DepositComponent},
  {path: 'Withdraw', component:WithdrawlComponent},
  {path: 'Viewbalance' , component:ViewComponent},
  {path: 'Viewdata' , component:ViewdataComponent},
  {path: 'Delete', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
