import { NgModule } from '@angular/core';
import {Orders} from '../cleaner/Model/Orders';
import {OrdersCategory} from '../client-orders/Model/OrdersCategory';
import {MatDialog} from '@angular/material';
import {GenericDialog} from './generic-dialog/generic-dialog';

@NgModule({})


export class UtilModule {
  static orderList: Array<Orders> = [];

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
}
