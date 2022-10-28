import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rest} from '../core/rest';
import { environment } from 'src/environments/environment';
import {ErrorHandler} from './error-handler';
import {map} from 'rxjs/operators';
import {ResponseClientComplete} from '../client-complete/Model/ResponseClientComplete';
import {RequestClientComplete} from '../client-complete/Model/RequestClientComplete';
import {OrderRequest} from '../client-complete/Model/OrderRequest';

const BASE_URL = environment.PriceDetailsURL;
const BASE_REGISTER_URL = environment.RegisterOrderURL;

@Injectable({
    providedIn: 'root'
})

export class AdministrarClientCompleteService {

    constructor(private http: HttpClient) {
    }

    public async readPriceDetailsData(products: RequestClientComplete): Promise<ResponseClientComplete> {
      const headers = Rest.makeHeaderVariables();
      return this.http.post(BASE_URL, products, {headers})
        .pipe(map((response: ResponseClientComplete) => response))
        .toPromise()
        .catch(ErrorHandler.handlerHttpError);
      }

  public async registerOrderData(order: OrderRequest): Promise<ResponseClientComplete> {
    const headers = Rest.makeHeaderVariables();
    return this.http.post(BASE_REGISTER_URL, order, {headers})
      .pipe(map((response: ResponseClientComplete) => response))
      .toPromise()
      .catch(ErrorHandler.handlerHttpError);
  }

}
