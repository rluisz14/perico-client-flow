import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    text: string;
}

@Component({
    selector: 'generic-dialog',
    templateUrl: 'generic-dialog.html',
})
export class GenericDialog {

    constructor(
        public dialogRef: MatDialogRef<GenericDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}