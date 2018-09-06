import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';

const routes: Routes = [
    { path: 'users', component: UserComponent },
    { path: 'add', component: AddUserComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
