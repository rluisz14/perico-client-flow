import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminProfileGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('profile') === 'administrator') {
        return true;
    } else {
      this.router.navigate(['/metrics']);
      return false;
    }
  }
}
