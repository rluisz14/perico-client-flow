import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../core/generic-dialog/generic-dialog';


@Component({
  selector: 'app-prevent-dialog',
  templateUrl: './prevent-dialog.component.html',
  styleUrls: ['./prevent-dialog.component.css']
})
export class PreventDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PreventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
