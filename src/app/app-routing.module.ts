import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashBoardComponent} from './component/dash-board/dash-board.component';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './auth.guard';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {DefaultComponent} from './component/dash-board/items/default/default.component';
import {ManageCustomerComponent} from './component/dash-board/items/manage-customer/manage-customer.component';
import {AllItemsComponent} from './component/dash-board/items/all-items/all-items.component';
import {OrderDetailsComponent} from './component/dash-board/items/order-details/order-details.component';
import {PlaceOrderComponent} from './component/dash-board/items/place-order/place-order.component';

const routes: Routes = [
  // meka mulinma thiyenna one
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'dashboard', component: DashBoardComponent, canActivate: [AuthGuard], children: [
      {path: '', component: DefaultComponent},
      {path: 'customer-management', component: ManageCustomerComponent, pathMatch: 'full'},
      {path: 'item-management', component: AllItemsComponent},
      {path: 'order-details', component: OrderDetailsComponent},
      {path: 'place-order', component: PlaceOrderComponent}
    ]
  },
  // meka yatinma thiyenn one(greedy oparator)
  {path: '**', component: PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
