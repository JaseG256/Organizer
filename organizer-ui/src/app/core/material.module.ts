import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';


@NgModule({
    imports: [CommonModule, MatButtonModule, MatToolbarModule,
        MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule],
    exports: [CommonModule, MatButtonModule, MatToolbarModule,
        MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule]
})
export class CustomMaterialModule {

}
