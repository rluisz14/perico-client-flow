import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rest} from '../core/rest';
import { environment } from 'src/environments/environment';
import {ErrorHandler} from './error-handler';
import {map} from 'rxjs/operators';
import {Login} from '../intranet/Login/Model/Login';
import {LoginResponse} from '../intranet/Login/Model/LoginResponse';

const BASE_URL = environment.LoginURL;

@Injectable({
    providedIn: 'root'
})

export class LoginClientService {

    constructor(private http: HttpClient) {
    }

    public async loginClientData(login: Login): Promise<LoginResponse> {
      const headers = Rest.makeHeaderVariables();
      return this.http.post(BASE_URL, login, {headers})
        .pipe(map((response: LoginResponse) => response))
        .toPromise()
        .catch(ErrorHandler.handlerHttpError);
      }

}
