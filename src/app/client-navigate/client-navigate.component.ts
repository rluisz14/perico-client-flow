import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-navigate',
  templateUrl: './client-navigate.component.html',
  styleUrls: ['./client-navigate.component.css']
})
export class ClientNavigateComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
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
}
