import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilModule} from '../../core/util.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  initialFormGroup: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(private _formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.initialFormGroup = this._formBuilder.group({
      usernameCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required],
    });
  }

  goHome() {
    localStorage.removeItem('isIntranet');
    this.router.navigate(['']).then(r => {});
  }

  login(): void {
    if (this.initialFormGroup.invalid) {
      return;
    }
    const loginCredentials = {
      'username': this.initialFormGroup.get('usernameCtrl').value,
      'password': this.initialFormGroup.get('passwordCtrl').value
    };
    this.isLoading = true;
  }

  getErrorMessage(fieldName: string): string {
    const formGroup = this.initialFormGroup.get(fieldName) as FormGroup;
    return formGroup.hasError('required') ? 'Requerido' : '';
  }
}
