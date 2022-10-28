import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  isLogged() {
    return localStorage.getItem('orderBasket') != null;
  }

  public async login(loginJson) {
  }

  signOut() {
    localStorage.removeItem('profile');
    return localStorage.removeItem('currentUserToken');
  }
}
