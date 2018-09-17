import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule } from '@angular/material';


@NgModule({
    imports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule],
    exports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule]
})
export class CustomMaterialModule {

}
