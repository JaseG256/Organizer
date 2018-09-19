import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule,
     MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatProgressSpinnerModule, MatDialog } from '@angular/material';


@NgModule({
    imports: [CommonModule, MatButtonModule, MatToolbarModule,
        MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,
         MatCardModule, MatProgressSpinnerModule, MatDialog],
    exports: [CommonModule, MatButtonModule, MatToolbarModule,
        MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,
         MatCardModule, MatProgressSpinnerModule, MatDialog]
})
export class CustomMaterialModule {

}
