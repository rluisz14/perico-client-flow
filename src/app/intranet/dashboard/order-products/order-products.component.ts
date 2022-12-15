import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {OrderDetailsResponse} from '../Model/OrderDetailsResponse';
import {OrderDetailsOperation} from './Model/OrderDetailsOperation';
import {AdministrarOrdersDetailsService} from '../../../service/orders-details.service';
import {ProductSuppliesResponse} from '../Model/ProductSuppliesResponse';
import {ProductSuppliesOperation} from './Model/ProductSuppliesOperation';
import {OrderSuppliesComponent} from './order-supplies/order-supplies.component';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent implements OnInit {
  dataSource: MatTableDataSource<OrderDetailsResponse> = new MatTableDataSource<OrderDetailsResponse>();
  displayedColumns = ['orderDetailId', 'categoryName', 'productName', 'quantity', 'supplies'];

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<OrderProductsComponent>,
    private service: AdministrarOrdersDetailsService,
    @Inject(MAT_DIALOG_DATA) public orderDetailsOperations: OrderDetailsOperation) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.orderDetailsOperations['orderDetails']);
  }

  async goToOrderSupplies(productId: number, quantity: number, productName: string) {
    let productSupplies;
    await this.service.readProductSuppliesData(productId, quantity).then((response => {
      productSupplies = response;
      console.log(productSupplies);
    }));
    const productSuppliesOperation = new ProductSuppliesOperation();
    productSuppliesOperation['title'] = 'Insumos de: ' + productName;
    console.log(productSupplies);
    productSuppliesOperation['supplies'] = productSupplies;
    this.dialog.open(OrderSuppliesComponent, {
      width: '450px',
      data: productSuppliesOperation,
      panelClass: 'order-products-dialog',
      disableClose: false
    }).afterClosed().subscribe(() => {
    });
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
