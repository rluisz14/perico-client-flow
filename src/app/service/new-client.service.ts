import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rest} from '../core/rest';
import { environment } from 'src/environments/environment';
import {ErrorHandler} from './error-handler';
import {map} from 'rxjs/operators';
import {Client} from '../client-complete/new-client/Model/Client';
import {NewClientResponse} from '../client-complete/Model/NewClientResponse';

const BASE_URL = environment.RegisterNewClientURL;

@Injectable({
    providedIn: 'root'
})

export class RegisterNewClientService {

    constructor(private http: HttpClient) {
    }

    public async registerNewClientData(client: Client): Promise<NewClientResponse> {
      const headers = Rest.makeHeaderVariables();
      return this.http.post(BASE_URL, client, {headers})
        .pipe(map((response: NewClientResponse) => response))
        .toPromise()
        .catch(ErrorHandler.handlerHttpError);
      }

}
