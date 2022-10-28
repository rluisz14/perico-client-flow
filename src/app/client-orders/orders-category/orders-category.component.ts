import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {AdministrarOrdersCategoryService} from '../../service/orders-category.service';
import {OrdersCategory} from '../Model/OrdersCategory';
import {OrdersCategoryOperation} from '../Model/OrdersCategoryOperation';
import {UtilModule} from '../../core/util.module';

@Component({
  selector: 'app-orders-category',
  templateUrl: './orders-category.component.html',
  styleUrls: ['./orders-category.component.css']
})
export class OrdersCategoryComponent implements OnInit {
  products: OrdersCategory[];

  constructor(
    private dialog: MatDialog,
    private service: AdministrarOrdersCategoryService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<OrdersCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrdersCategoryOperation) {
  }

  ngOnInit() {
    this.products = this.data['products'];
  }

  /**
   * Close modal.
   */
  onNoClick() {
    this.dialogRef.close();
  }

  registerOrder(product: OrdersCategory) {
    UtilModule.setOrderItem(product);

  }

}
