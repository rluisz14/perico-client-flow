import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NavigateOrderGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (!localStorage.getItem('confirmOrder')) {
        return true;
    } else {
      this.router.navigate(['client-complete']).then(r => {});
      return false;
    }
  }
}
