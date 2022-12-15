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
import {NewClientOperation} from './Model/NewClientOperation';
import {NewClientComponent} from './new-client/new-client.component';
import {Client} from './new-client/Model/Client';

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
      this.registerOrderData().then(res => {
        this.stepsConfirmOrder();
      }).catch(e => {
        if (e.status === 401) {
          this.newRegister();
        } else {
          UtilModule.openGenericDialog('Ocurrio un error, vuelva intentar en unos minutos', this.dialog);
        }
      });
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
      'EmailCtrl: ' + this.getErrorMessage('EmailCtrl') + ' | ' +
      'DTypeCtrl: ' + this.getErrorMessage('DTypeCtrl') + ' | ' +
      'DocumentCtrl: ' + this.getErrorMessage('DocumentCtrl') + ' | ' +
      'PhoneCtrl: ' + this.getErrorMessage('PhoneCtrl') + ' | ' +
      'PMethodCtrl: ' + this.getErrorMessage('PMethodCtrl') + ' | ' +
      'AddressCtrl: ' + this.getErrorMessage('AddressCtrl') + ' | ' +
      'ADescriptCtrl: ' + this.getErrorMessage('ADescriptCtrl');
  }

  getErrorMessage(fieldName: string): string {
    const formGroup = this.initialFormGroup.get(fieldName) as FormGroup;
    return formGroup.hasError('required') ? 'Requerido' : 'OK';
  }

  newRegister() {
    const newClientOperation = new NewClientOperation();
    newClientOperation['title'] = 'Completa tus datos';
    newClientOperation['attempt'] = 'some';
    newClientOperation['client'] = this.getClientFromForms();
    this.dialog.open(NewClientComponent, {
      width: '500px',
      data: newClientOperation,
      panelClass: 'new-client-dialog',
      disableClose: false
    }).afterClosed().subscribe((r) => {
      if (r === true) {
        this.confirmOrder();
      }
    });
  }

  getClientFromForms(): Client {
    const client = new Client();
    client['name'] = this.initialFormGroup.get('NameCtrl').value;
    client['email'] = this.initialFormGroup.get('EmailCtrl').value;
    client['documentNumber'] = this.initialFormGroup.get('DocumentCtrl').value;
    client['phoneNumber'] = this.initialFormGroup.get('PhoneCtrl').value;
    client['address'] = this.initialFormGroup.get('AddressCtrl').value;
    client['addressReference'] = this.initialFormGroup.get('ADescriptCtrl').value;
    return client;
  }

  stepsConfirmOrder() {
    localStorage.removeItem('confirmOrder');
    UtilModule.cleanOrdersItems();
    this.router.navigate(['']).then(r => {});
    UtilModule.openGenericDialog('Gracias por preferir RestoBar Perico, pronto nos contactaremos con usted', this.dialog);
  }
}
