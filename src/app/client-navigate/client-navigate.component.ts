import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-navigate',
  templateUrl: './client-navigate.component.html',
  styleUrls: ['./client-navigate.component.css']
})
export class ClientNavigateComponent implements OnInit {
  constructor(private router: Router) { }
  isIntranet: boolean;
  isCollapsed = false;

  ngOnInit() {
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goToOrders() {
    this.router.navigate(['client-orders']);
  }

  goToAbout() {
    this.router.navigate(['client-about']);
  }

  goToContact() {
    this.router.navigate(['client-contact']);
  }

  isNotIntranet() {
    return !localStorage.getItem('isIntranet');
  }

  goToIntranet() {
    if (!localStorage.getItem('confirmOrder')) {
      localStorage.setItem('isIntranet', 'true');
      this.router.navigate(['app-login']);
    }
  }
}
