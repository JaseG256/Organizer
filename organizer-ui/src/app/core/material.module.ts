import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule,
     MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';


@NgModule({
    imports: [CommonModule, MatButtonModule, MatToolbarModule,
        MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,
         MatCardModule, MatProgressSpinnerModule],
    exports: [CommonModule, MatButtonModule, MatToolbarModule,
        MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,
         MatCardModule, MatProgressSpinnerModule]
})
export class CustomMaterialModule {

}
