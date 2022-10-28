import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-content',
  templateUrl: './client-content.component.html',
  styleUrls: ['./client-content.component.css']
})
export class ClientContentComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
}
