import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {OrderDetailsResponse} from '../Model/OrderDetailsResponse';
import {OrderDetailsOperation} from './Model/OrderDetailsOperation';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  dataSource: MatTableDataSource<OrderDetailsResponse> = new MatTableDataSource<OrderDetailsResponse>();
  displayedColumns = ['orderDetailId', 'categoryName', 'productName', 'quantity', 'price'];

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<OrderDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public orderDetailsOperations: OrderDetailsOperation) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.orderDetailsOperations['orderDetails']);
  }

  /**
   * Close modal.
   */
  onNoClick() {
    this.dialogRef.close();
  }

  getOperationMessage() {
    return 'Regresar';
  }
}
