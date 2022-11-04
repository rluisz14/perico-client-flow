import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UtilModule} from '../core/util.module';

@Component({
  selector: 'app-client-footer',
  templateUrl: './client-footer.component.html',
  styleUrls: ['./client-footer.component.css']
})
export class ClientFooterComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  isNotIntranet() {
    return !localStorage.getItem('isIntranet');
  }
}
