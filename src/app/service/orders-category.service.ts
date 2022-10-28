import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rest} from '../core/rest';
import { environment } from 'src/environments/environment';
import {ErrorHandler} from './error-handler';
import {map} from 'rxjs/operators';
import {ResponseOrdersCategory} from '../client-orders/Model/ResponseOrdersCategory';

const BASE_URL = environment.CategoryProductsURL;

@Injectable({
    providedIn: 'root'
})

export class AdministrarOrdersCategoryService {

    constructor(private http: HttpClient) {
    }

    public async readOrdersCategoryData(categoryId: number): Promise<ResponseOrdersCategory> {
      const headers = Rest.makeHeaderVariables();
      return this.http.get(BASE_URL.replace('{categoryId}', categoryId.toString()), {headers})
        .pipe(map((response: ResponseOrdersCategory) => response))
        .toPromise()
        .catch(ErrorHandler.handlerHttpError);
      }

}
