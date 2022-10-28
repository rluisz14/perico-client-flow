import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandler {

  static handlerHttpError = function (e: HttpErrorResponse) {
    // can be saved in a log file
    // add more error
    if (e.status === 404) {
      console.log('status: %d   message: Endpoint incorrecto %s', e.status, e.url);
    } else if (e.status === 500) {
      console.log('status: %n   message: Error interno del servidor', e.status);
    } else {
      console.log(e.message);
    }
    throw e;
  };
}
