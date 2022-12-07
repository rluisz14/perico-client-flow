import { NgModule } from '@angular/core';
import {Orders} from '../cleaner/Model/Orders';
import {OrdersCategory} from '../client-orders/Model/OrdersCategory';
import {MatDialog} from '@angular/material';
import {GenericDialog} from './generic-dialog/generic-dialog';

@NgModule({})


export class UtilModule {
  static orderList: Array<Orders> = [];
  static sideNavBar = true;
  static isAdminOpen = true;
  static isOrdersOpen = false;
  static isKitchenOpen = false;
  static isStoreOpen = false;

  constructor() {
  }

  static setOrderItem(product: OrdersCategory) {
    const order = new Orders();
    order['productId'] = product['productId'];
    order['productName'] = product['productName'];
    order['productPrice'] = product['productPrice'];
    order['product'] = product;
    this.orderList.push(order);
  }

  static cleanOrdersItems() {
    this.orderList = new Array<Orders>();
  }

  static openGenericDialog(text: String, dialog: MatDialog): void {
    const dialogRef = dialog.open(GenericDialog, {
      width: '400px',
      data: { text: text }
    });

    dialogRef.afterClosed().subscribe(result => {
      return;
    });
  }

  static toggleSideNavBar() {
    this.sideNavBar = this.sideNavBar !== true;
  }

  static getSideNavBar(): boolean {
    return this.sideNavBar;
  }

  static openCloseOrders() {
    this.closeAll();
    this.isOrdersOpen = this.isOrdersOpen !== true;
  }
  static openCloseKitchen() {
    this.closeAll();
    this.isKitchenOpen = this.isKitchenOpen !== true;
  }
  static openCloseStore() {
    this.closeAll();
    this.isStoreOpen = this.isStoreOpen !== true;
  }
  static goBack() {
    this.closeAll();
    this.isAdminOpen = this.isAdminOpen !== true;
  }
  static closeAll() {
    this.isAdminOpen = false;
    this.isOrdersOpen = false;
    this.isKitchenOpen = false;
    this.isStoreOpen = false;
  }
}
