import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdministrarClientOrdersService} from '../service/client-orders.service';
import {ClientOrders} from './Model/ClientOrders';
import {OrdersCategoryComponent} from './orders-category/orders-category.component';
import {MatDialog} from '@angular/material';
import {AdministrarOrdersCategoryService} from '../service/orders-category.service';
import {OrdersCategory} from './Model/OrdersCategory';
import {OrdersCategoryOperation} from './Model/OrdersCategoryOperation';

@Component({
  selector: 'app-client-orders',
  templateUrl: './client-orders.component.html',
  styleUrls: ['./client-orders.component.css']
})
export class ClientOrdersComponent implements OnInit {
  products: OrdersCategory[];
  categories: ClientOrders[];
  constructor(private router: Router,
              private service: AdministrarClientOrdersService,
              private serviceProduct: AdministrarOrdersCategoryService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.setDataSource().then(r => r);
  }

  private async setDataSource() {
    await this.service.readClientOrdersData().then((response => {
      this.categories = response['categories'];
    }));
  }

  private async setListCategory(categoryId: number) {
    await this.serviceProduct.readOrdersCategoryData(categoryId).then((response => {
      this.products = response['products'];
    }));
  }

  async listProducts(categoryId: number) {
    const data = OrdersCategoryOperation;
    await this.setListCategory(categoryId).then(r => {
      data['products'] = this.products;
    });
    console.log(data['products']);
    this.dialog.open(OrdersCategoryComponent, {
      width: '45%',
      height: '74%',
      panelClass: 'products-dialog',
      data: data,
      disableClose: false
    }).afterClosed().subscribe(() => {
    });
  }
}
