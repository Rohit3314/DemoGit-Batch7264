import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithdrawlComponent } from './withdrawl/withdrawl.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { DepositComponent } from './deposit/deposit.component';
import { DeleteComponent } from './delete/delete.component';
@NgModule({
  declarations: [
    AppComponent,
    WithdrawlComponent,
    ViewComponent,
    ViewdataComponent,
    DepositComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
