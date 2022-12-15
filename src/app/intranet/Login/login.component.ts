import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NewClientOperation} from '../../client-complete/Model/NewClientOperation';
import {NewClientComponent} from '../../client-complete/new-client/new-client.component';
import {MatDialog} from '@angular/material';
import {LoginClientService} from '../../service/login-client.service';
import {Login} from './Model/Login';
import {UtilModule} from '../../core/util.module';

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
              private service: LoginClientService,
              public dialog: MatDialog,
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
    this.isLoading = true;
    const loginCredentials = new Login();
    loginCredentials['userName'] = this.initialFormGroup.get('usernameCtrl').value;
    loginCredentials['userPassword'] = this.initialFormGroup.get('passwordCtrl').value;
    localStorage.setItem('userLogged', loginCredentials['userName'].toUpperCase());
    this.service.loginClientData(loginCredentials).then(
      (rs: any) => {
          this.isLoading = false;
          localStorage.setItem('isLogged', 'true');
          this.router.navigate(['app-admin']).then(r => {});
      })
      .catch(e => {
        this.isLoading = false;
        if (e.status === 0 || e.status === 404 || e.status === 500) {
          UtilModule.openGenericDialog('Error interno, contactarse con el administrador', this.dialog);
        }
      });
  }

  getErrorMessage(fieldName: string): string {
    const formGroup = this.initialFormGroup.get(fieldName) as FormGroup;
    return formGroup.hasError('required') ? 'Requerido' : '';
  }

  newRegister() {
    const newClientOperation = new NewClientOperation();
    newClientOperation['title'] = 'Registra tus datos';
    newClientOperation['attempt'] = 'all';
    this.dialog.open(NewClientComponent, {
      width: '500px',
      data: newClientOperation,
      panelClass: 'new-client-dialog',
      disableClose: false
    }).afterClosed().subscribe(() => {
    });
  }
}
