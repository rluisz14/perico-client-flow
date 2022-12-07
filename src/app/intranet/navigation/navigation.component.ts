import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {UtilModule} from '../../core/util.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {

  }
  openCloseAdmin() {
    UtilModule.goBack();
  }

  toggleSideNav() {
    UtilModule.toggleSideNavBar();
  }
}
