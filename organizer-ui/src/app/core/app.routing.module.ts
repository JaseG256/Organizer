import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';

import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../user/add-user.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    { path: 'users', component: UserComponent },
    { path: 'add', component: AddUserComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent }
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
