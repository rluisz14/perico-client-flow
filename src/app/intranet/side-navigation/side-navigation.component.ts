import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {UtilModule} from '../../core/util.module';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
  }

  openCloseAdmin() {
    UtilModule.goBack();
  }
  openCloseOrders() {
    UtilModule.closeAll();
    UtilModule.openCloseOrders();
  }
  openCloseKitchen() {
    UtilModule.closeAll();
    UtilModule.openCloseKitchen();
  }
  openCloseStore() {
    UtilModule.closeAll();
    UtilModule.openCloseStore();
  }

  getToggleSideNavBar(): boolean {
    return UtilModule.getSideNavBar();
  }

  getUserLogged() {
    return localStorage.getItem('userLogged');
  }
}
