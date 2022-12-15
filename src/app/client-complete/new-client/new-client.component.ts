import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Client} from './Model/Client';
import {NewClientOperation} from '../Model/NewClientOperation';
import {RegisterNewClientService} from '../../service/new-client.service';
import {UtilModule} from '../../core/util.module';
import {NewClientResponse} from '../Model/NewClientResponse';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  initialFormGroup: FormGroup;
  number = 10;
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewClientComponent>,
    private service: RegisterNewClientService,
    @Inject(MAT_DIALOG_DATA) public newClientOperation: NewClientOperation) {
  }

  ngOnInit() {
    this.validatorOrFillFields();
  }

  /**
   * Close modal.
   */
  onNoClick() {
    this.dialogRef.close();
  }

  getErrorMessage(fieldName: string): string {
    const formGroup = this.initialFormGroup.get(fieldName) as FormGroup;
    return formGroup.hasError('required') ? 'Requerido' : '';
  }

  updateOrRegister() {
    if (this.initialFormGroup.invalid) {
      return;
    }
    if (!this.isValidatedPassword()) {
      return;
    }
    this.initialFormGroup.disable();
    this.registerPath();
  }

  getTitleMessage() {
    return this.newClientOperation['title'];
  }

  getOperationMessage() {
    return 'Registrar Usuario';
  }

  private commonRegisterSection(): void {
    const client = this.getClientFromForms();
    client['userType'] = 'CLIENT';
    client['userStatus'] = 'A';
    this.service.registerNewClientData(client).then(
      (rs: NewClientResponse) => {
        if (rs['personId']) {
          this.isLoading = false;
          this.dialogRef.close(true);
        }
      })
      .catch(e => {
        this.isLoading = false;
        if (e.status === 0 || e.status === 404 || e.status === 500) {
          UtilModule.openGenericDialog('Error interno, contactarse con el administrador', this.dialog);
        }
      });
  }

  registerPath(): void {
    this.commonRegisterSection();
  }

  validatorOrFillFields() {
    if (this.newClientOperation['attempt'] === 'all') {
      this.initialFormGroup = this._formBuilder.group({
        FullNameClientCtrl: ['', Validators.required],
        EmailClientCtrl: ['', Validators.required],
        DocumentNumberClientCtrl: ['', Validators.required],
        PhoneNumberClientCtrl: ['', Validators.required],
        AddressClientCtrl: ['', Validators.required],
        AddressReferenceClientCtrl: ['', Validators.required],
        BirthdateClientCtrl: ['', Validators.required],
        UsernameClientCtrl: ['', Validators.required],
        PasswordClientCtrl: ['', Validators.required],
        ConfirmPasswordClientCtrl: ['', Validators.required]
      });
    } else {
      this.initialFormGroup = this._formBuilder.group({
        FullNameClientCtrl: [this.newClientOperation['client']['name'], Validators.required],
        EmailClientCtrl: [this.newClientOperation['client']['email'], Validators.required],
        DocumentNumberClientCtrl: [this.newClientOperation['client']['documentNumber'], Validators.required],
        PhoneNumberClientCtrl: [this.newClientOperation['client']['phoneNumber'], Validators.required],
        AddressClientCtrl: [this.newClientOperation['client']['address'], Validators.required],
        AddressReferenceClientCtrl: [this.newClientOperation['client']['addressReference'], Validators.required],
        BirthdateClientCtrl: ['', Validators.required],
        UsernameClientCtrl: ['', Validators.required],
        PasswordClientCtrl: ['', Validators.required],
        ConfirmPasswordClientCtrl: ['', Validators.required]
      });
    }
  }

  getClientFromForms(): Client {
    const client = new Client();
    client['name'] = this.initialFormGroup.get('FullNameClientCtrl').value;
    client['email'] = this.initialFormGroup.get('EmailClientCtrl').value;
    client['documentNumber'] = this.initialFormGroup.get('DocumentNumberClientCtrl').value;
    client['phoneNumber'] = this.initialFormGroup.get('PhoneNumberClientCtrl').value;
    client['address'] = this.initialFormGroup.get('AddressClientCtrl').value;
    client['addressReference'] = this.initialFormGroup.get('AddressReferenceClientCtrl').value;
    client['birthdate'] = this.initialFormGroup.get('BirthdateClientCtrl').value;
    client['userName'] = this.initialFormGroup.get('UsernameClientCtrl').value;
    client['userPassword'] = this.initialFormGroup.get('PasswordClientCtrl').value;
    return client;
  }

  isValidatedPassword() {
    return this.initialFormGroup.get('PasswordClientCtrl').value === this.initialFormGroup.get('ConfirmPasswordClientCtrl').value;
  }

  getPasswordMessage() {
    if (this.isValidatedPassword()) {
      return 'Constraseña Correcta';
    } else {
      return 'La Contraseña es Incorrecta';
    }
  }
}
