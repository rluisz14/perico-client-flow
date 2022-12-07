import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientContentComponent} from '../client-content/client-content.component';
import {ClientContactComponent} from '../client-contact/client-contact.component';
import {ClientOrdersComponent} from '../client-orders/client-orders.component';
import {ClientAboutComponent} from '../client-about/client-about.component';
import {ClientCompleteComponent} from '../client-complete/client-complete.component';
import {ConfirmOrderGuard} from '../guards/confirm-order.guard';
import {NavigateOrderGuard} from '../guards/navigate-order.guard';
import {LoginComponent} from '../intranet/Login/login.component';
import {IntranetGuard} from '../guards/intranet.guard';
import {ClientGuard} from '../guards/client.guard';
import {AdminComponent} from '../intranet/admin/admin.component';
import {LoggedGuard} from '../guards/logged.guard';

const routes: Routes = [
  { path: '', component: ClientContentComponent, canActivate: [ClientGuard, NavigateOrderGuard]},
  { path: 'client-orders', component: ClientOrdersComponent, canActivate: [ClientGuard, NavigateOrderGuard]},
  { path: 'client-about', component: ClientAboutComponent, canActivate: [ClientGuard, NavigateOrderGuard]},
  { path: 'client-contact', component: ClientContactComponent, canActivate: [ClientGuard, NavigateOrderGuard]},
  { path: 'client-complete', component: ClientCompleteComponent, canActivate: [ClientGuard, ConfirmOrderGuard]},
  { path: 'app-login', component: LoginComponent, canActivate: [NavigateOrderGuard, IntranetGuard]},
  { path: 'app-admin', component: AdminComponent, canActivate: [NavigateOrderGuard, IntranetGuard, LoggedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
