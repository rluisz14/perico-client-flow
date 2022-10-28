import {HttpHeaders, HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

export class Rest {
  httpClient: HttpClient;

  constructor() {
  }

  static makeHeaderVariables() {
    const date = new Date();
    const timeZoneOffset = date.getTimezoneOffset() * 60000; // offset in milliseconds
    const messageId = (new Date(Date.now() - timeZoneOffset)).toISOString().slice(0, -1).replace(/[-|:|.|T]/g, '');
    const timestamp = date.getTime().toString();
    const headers = new HttpHeaders()
      .set('X-Correlation-Id', messageId)
      .set('X-Organization-Id', 'PERICO_CLIENT')
      .set('netId', '1')
      .set('consumerId', localStorage.getItem('userEmail') != null ? localStorage.getItem('userEmail') : '1')
      .set('Ocp-Apim-Subscription-Key', environment.subscriptionKey)
      .set('referenceNumber', 'confirmacionPendiente')
      .set('channel', '1')
      .set('serviceId', 'backofficefront')
      .set('userId', 'WBP')
      .set('deviceId', '1')
      .set('timestamp', timestamp);
    return headers;
  }

  postPromise(url, data, params): Promise<any> {
    const headers = {headers: new HttpHeaders(params)};

    return this.httpClient
      .post(url, data, headers)
      .toPromise()
      .then(
        (res: Response) => Promise.resolve(res)
      )
      .catch(
        (err) => Promise.reject(err)
      );
  }

}
