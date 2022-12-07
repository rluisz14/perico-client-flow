import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material.module';
import { FiledropModule } from './core/ngx-file-drop.module';
import { AngularfileModule } from './core/angular-file.module';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
  MatGridListModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatRadioModule,
  MatListModule,
  MatDividerModule,
  MatCheckboxModule,
  MatTreeModule,
  MatDialogModule,
  MatToolbarModule,
  MatButtonToggleModule, MatPaginatorModule, MatSortModule, MatTableModule,
  MatTooltipModule, MatSidenavModule
} from '@angular/material';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ConfirmOrderGuard} from './guards/confirm-order.guard';
import { NavigateOrderGuard} from './guards/navigate-order.guard';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ChartsModule } from 'ng2-charts';
import { AuthService } from './service/auth.service';
import { GenericDialog } from './core/generic-dialog/generic-dialog';
import {IntranetGuard} from './guards/intranet.guard';
import {ClientGuard} from './guards/client.guard';
import { ClientNavigateComponent} from './client-navigate/client-navigate.component';
import {ClientFooterComponent} from './client-footer/client-footer.component';
import {CleanerComponent} from './cleaner/cleaner.component';
import { ClientContentComponent } from './client-content/client-content.component';
import { ClientOrdersComponent } from './client-orders/client-orders.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import {ClientAboutComponent} from './client-about/client-about.component';
import {OrdersCategoryComponent} from './client-orders/orders-category/orders-category.component';
import {ClientCompleteComponent} from './client-complete/client-complete.component';
import {LoginComponent} from './intranet/Login/login.component';
import {NavigationComponent} from './intranet/navigation/navigation.component';
import {AdminComponent} from './intranet/admin/admin.component';
import {SideNavigationComponent} from './intranet/side-navigation/side-navigation.component';
import {DashboardComponent} from './intranet/dashboard/dashboard.component';
import {LoggedGuard} from './guards/logged.guard';

// tslint:disable-next-line:max-line-length


@NgModule({
  declarations: [
    AppComponent,
    ClientNavigateComponent,
    ClientFooterComponent,
    CleanerComponent,
    ErrorMessageComponent,
    GenericDialog,
    ClientContentComponent,
    ClientOrdersComponent,
    ClientAboutComponent,
    ClientContactComponent,
    OrdersCategoryComponent,
    ClientCompleteComponent,
    LoginComponent,
    NavigationComponent,
    SideNavigationComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatGridListModule,
    FiledropModule,
    AngularfileModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatTreeModule,
    CdkTreeModule,
    MatMomentDateModule,
    MatDialogModule,
    MatToolbarModule,
    ChartsModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSidenavModule,
  ],
  providers: [ConfirmOrderGuard, NavigateOrderGuard, AuthService, ClientGuard, IntranetGuard, LoggedGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    ErrorMessageComponent,
    GenericDialog,
    OrdersCategoryComponent
  ]
})
export class AppModule {

}
