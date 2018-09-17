import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,
    MatCardModule, MatDialogModule, MatInputModule, MatTableModule, } from '@angular/material';


@NgModule({
    imports: [ CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule],
    exports: [ CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule],
})
export class CustomMaterialModule { }
