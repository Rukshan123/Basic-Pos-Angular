import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { LoginComponent } from './component/login/login.component';
import { CookieModule } from 'ngx-cookie';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultComponent } from './component/dash-board/items/default/default.component';
import { ManageCustomerComponent } from './component/dash-board/items/manage-customer/manage-customer.component';
import { AllItemsComponent } from './component/dash-board/items/all-items/all-items.component';
import { OrderDetailsComponent } from './component/dash-board/items/order-details/order-details.component';
import { PlaceOrderComponent } from './component/dash-board/items/place-order/place-order.component';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    LoginComponent,
    PageNotFoundComponent,
    FooterComponent,
    DefaultComponent,
    ManageCustomerComponent,
    AllItemsComponent,
    OrderDetailsComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatButtonModule,
    CookieModule.forRoot(),
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
