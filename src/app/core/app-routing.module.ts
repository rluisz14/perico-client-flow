import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientContentComponent} from '../client-content/client-content.component';
import {ClientContactComponent} from '../client-contact/client-contact.component';
import {ClientOrdersComponent} from '../client-orders/client-orders.component';
import {ClientAboutComponent} from '../client-about/client-about.component';
import {ClientCompleteComponent} from '../client-complete/client-complete.component';
import {ConfirmOrderGuard} from '../guards/confirm-order.guard';
import {NavigateOrderGuard} from '../guards/navigate-order.guard';

const routes: Routes = [
  { path: '', component: ClientContentComponent, canActivate: [NavigateOrderGuard]},
  { path: 'client-orders', component: ClientOrdersComponent, canActivate: [NavigateOrderGuard]},
  { path: 'client-about', component: ClientAboutComponent, canActivate: [NavigateOrderGuard]},
  { path: 'client-contact', component: ClientContactComponent, canActivate: [NavigateOrderGuard]},
  { path: 'client-complete', component: ClientCompleteComponent, canActivate: [ConfirmOrderGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
