import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Orders} from '../cleaner/Model/Orders';
import {UtilModule} from '../core/util.module';
import {AdministrarClientCompleteService} from '../service/client-complete.service';
import {RequestClientComplete} from './Model/RequestClientComplete';
import {OrdersCategory} from '../client-orders/Model/OrdersCategory';
import {PriceDetails} from './Model/PriceDetails';
import {OrderRequest} from './Model/OrderRequest';
import {OrderDetailsRequest} from './Model/OrderDetailsResquest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-complete',
  templateUrl: './client-complete.component.html',
  styleUrls: ['./client-complete.component.css']
})
export class ClientCompleteComponent implements OnInit {
  initialFormGroup: FormGroup;

  constructor(private router: Router,
              public dialog: MatDialog,
              private _formBuilder: FormBuilder,
              private service: AdministrarClientCompleteService) {
    window.addEventListener('beforeunload', (event) => {
      if (confirm('Are you sure to leave ')) {
        console.log('Implement delete functionality here');
      }
      event.preventDefault();
      event.returnValue = 'Unsaved modifications';
      return event;
    });
  }

  orderList = UtilModule.orderList;
  dataSource: MatTableDataSource<Orders>;
  displayedColumns: string[] = ['producto', 'precio'];
  priceDetails = new PriceDetails();

  ngOnInit() {
    this.validateForm();
    this.dataSource = new MatTableDataSource(this.orderList);
    this.getPriceDetails().then((r => {
      this.priceDetails = r;
    }));
  }

  private async getPriceDetails() {
    const products = Array<OrdersCategory>();
    this.orderList.forEach(i => {
      products.push(i['product']);
    });
    const request = new RequestClientComplete();
    request['products'] = products;
    return await this.service.readPriceDetailsData(request).then((response => response['priceDetails']));
  }

  private async registerOrderData() {
    const order = new OrderRequest();
    const orderDetails = new Array<OrderDetailsRequest>();
    this.orderList.forEach(i => {
      const orderDetail = new OrderDetailsRequest();
      orderDetail['productId'] = i['product']['productId'];
      orderDetail['categoryId'] = i['product']['categoryId'];
      orderDetail['productPrice'] = i['product']['productPrice'];
      orderDetails.push(orderDetail);
    });
    order['clientDocumentNumber'] = this.initialFormGroup.get('DocumentCtrl').value;
    order['phoneNumber'] = this.initialFormGroup.get('PhoneCtrl').value;
    order['email'] = this.initialFormGroup.get('EmailCtrl').value;
    order['paymentMethod'] = this.initialFormGroup.get('PMethodCtrl').value;
    order['addressDelivery'] = this.initialFormGroup.get('AddressCtrl').value;
    order['addressReferenceDelivery'] = this.initialFormGroup.get('ADescriptCtrl').value;
    order['products'] = orderDetails;
    return await this.service.registerOrderData(order).then((response => response));
  }

  goingBack(): void {
    if (window.confirm('¿Esta seguro que desea salir antes de confirmar su pedido?')) {
      localStorage.removeItem('confirmOrder');
      this.router.navigate(['client-orders']).then(r => {
      });
    }
  }

  confirmOrder(): void {
    if (this.initialFormGroup.invalid) {
      UtilModule.openGenericDialog(this.formErrors(), this.dialog);
      return;
    }
    if (window.confirm('¿Desea confirmar su pedido?')) {
      localStorage.removeItem('confirmOrder');
      this.registerOrderData().then(r => r);
      UtilModule.cleanOrdersItems();
      this.router.navigate(['']).then(r => {
      });
      UtilModule.openGenericDialog('Gracias por preferir RestoBar Perico, pronto nos contactaremos con usted', this.dialog);
    }
  }

  validateForm(): void {
    this.initialFormGroup = this._formBuilder.group({
      NameCtrl: ['', Validators.required],
      EmailCtrl: ['', Validators.required],
      DTypeCtrl: ['', Validators.required],
      DocumentCtrl: ['', Validators.required],
      PhoneCtrl: ['', Validators.required],
      PMethodCtrl: ['', Validators.required],
      AddressCtrl: ['', Validators.required],
      ADescriptCtrl: ['', Validators.required]
    });
  }

  formErrors() {
    return 'NameCtrl: ' + this.getErrorMessage('NameCtrl') + ' | \n' +
      'EmailCtrl: ' + this.getErrorMessage('NameCtrl') + ' | ' +
      'DTypeCtrl: ' + this.getErrorMessage('NameCtrl') + ' | ' +
      'DocumentCtrl: ' + this.getErrorMessage('NameCtrl') + ' | ' +
      'PhoneCtrl: ' + this.getErrorMessage('NameCtrl') + ' | ' +
      'PMethodCtrl: ' + this.getErrorMessage('NameCtrl') + ' | ' +
      'AddressCtrl: ' + this.getErrorMessage('NameCtrl') + ' | ' +
      'ADescriptCtrl: ' + this.getErrorMessage('EmailCtrl');
  }

  getErrorMessage(fieldName: string): string {
    const formGroup = this.initialFormGroup.get(fieldName) as FormGroup;
    return formGroup.hasError('required') ? 'Requerido' : 'OK';
  }
}
