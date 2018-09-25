import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    templateUrl: 'error-dialog.component.html'
})

export class ErrorDialogComponent {

    constructor(private dialogref: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    public closeDialog() {
        this.dialogref.close();
    }
}
