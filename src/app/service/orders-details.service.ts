import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Rest} from '../core/rest';
import {environment} from 'src/environments/environment';
import {ErrorHandler} from './error-handler';
import {map} from 'rxjs/operators';
import {OrderResponse} from '../intranet/dashboard/Model/OrderResponse';
import {ProductSuppliesResponse} from '../intranet/dashboard/Model/ProductSuppliesResponse';

const BASE_URL = environment.OrderDetailsURL;
const BASE_SUPPLIES_URL = environment.ProductSuppliesURL;

@Injectable({
  providedIn: 'root'
})

export class AdministrarOrdersDetailsService {

  constructor(private http: HttpClient) {
  }

  public async readOrdersDetailsData(): Promise<OrderResponse[]> {
    const headers = Rest.makeHeaderVariables();
    return this.http.get(BASE_URL, {headers})
      .pipe(map((response: OrderResponse[]) => response['orders']))
      .toPromise()
      .catch(ErrorHandler.handlerHttpError);
  }

  public async readOrdersKitchenData(): Promise<OrderResponse[]> {
    const params = new HttpParams().set('orderStatus', 'NUEVO,EN_PREPARACION');
    const headers = Rest.makeHeaderVariables();
    return this.http.get(BASE_URL, {headers, params})
      .pipe(map((response: OrderResponse[]) => response['orders']))
      .toPromise()
      .catch(ErrorHandler.handlerHttpError);
  }

  public async readProductSuppliesData(productId: number, quantity: number): Promise<ProductSuppliesResponse[]> {
    const params = new HttpParams().set('productId', productId.toString());
    params.set('quantity', quantity.toString());
    const headers = Rest.makeHeaderVariables();
    return this.http.get(BASE_SUPPLIES_URL, {headers, params})
      .pipe(map((response: OrderResponse[]) => response['productDetails']))
      .toPromise()
      .catch(ErrorHandler.handlerHttpError);
  }

}
