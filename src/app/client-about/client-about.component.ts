import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-about',
  templateUrl: './client-about.component.html',
  styleUrls: ['./client-about.component.css']
})
export class ClientAboutComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
}
