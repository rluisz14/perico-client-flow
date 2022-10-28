import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rest} from '../core/rest';
import { environment } from 'src/environments/environment';
import {ErrorHandler} from './error-handler';
import {map} from 'rxjs/operators';
import {ResponseClientOrders} from '../client-orders/Model/ResponseClientOrders';

const BASE_URL = environment.OrdersCategoryURL;

@Injectable({
    providedIn: 'root'
})

export class AdministrarClientOrdersService {

    constructor(private http: HttpClient) {
    }

    public async readClientOrdersData(): Promise<ResponseClientOrders> {
      const headers = Rest.makeHeaderVariables();
      return this.http.get(BASE_URL, {headers})
        .pipe(map((response: ResponseClientOrders) => response))
        .toPromise()
        .catch(ErrorHandler.handlerHttpError);
      }

}
