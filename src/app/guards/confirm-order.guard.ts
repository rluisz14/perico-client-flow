import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmOrderGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('confirmOrder')) {
        return true;
    } else {
      this.router.navigate(['']).then(r => {});
      return false;
    }
  }
}
