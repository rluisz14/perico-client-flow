import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('isLogged')) {
        return true;
    } else {
      this.router.navigate(['app-login']).then(r => {});
      return false;
    }
  }
}
