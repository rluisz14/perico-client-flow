import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {AdministrarOrdersDetailsService} from '../../../../service/orders-details.service';
import {ProductSuppliesResponse} from '../../Model/ProductSuppliesResponse';
import {ProductSuppliesOperation} from '../Model/ProductSuppliesOperation';

@Component({
  selector: 'app-order-supplies',
  templateUrl: './order-supplies.component.html',
  styleUrls: ['./order-supplies.component.css']
})
export class OrderSuppliesComponent implements OnInit {
  dataSource: MatTableDataSource<ProductSuppliesResponse> = new MatTableDataSource<ProductSuppliesResponse>();
  displayedColumns = ['productDetailId', 'supplyName', 'metricUnits', 'quantity'];

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<OrderSuppliesComponent>,
    private service: AdministrarOrdersDetailsService,
    @Inject(MAT_DIALOG_DATA) public productSuppliesOperations: ProductSuppliesOperation) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.productSuppliesOperations['supplies']);
    console.log(this.productSuppliesOperations['supplies']);
  }

  /**
   * Close modal.
   */
  onNoClick() {
    this.dialogRef.close();
  }

  getTittleMessage() {
    return this.productSuppliesOperations['title'];
  }

  getOperationMessage() {
    return 'Regresar';
  }
}
