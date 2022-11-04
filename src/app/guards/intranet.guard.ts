import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class IntranetGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('isIntranet')) {
        return true;
    } else {
      this.router.navigate(['']).then(r => {});
      return false;
    }
  }
}
