import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';

import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../user/add-user.component';
import { LoginComponent } from '../login/login.component';
import { UserDetailsComponent } from '../user/user-details.component';

const routes: Routes = [
    { path: 'api/users', component: UserComponent },
    { path: 'api/auth/signup', component: AddUserComponent },
    { path: 'api/auth/login', component: LoginComponent },
    { path: 'users/:username', component: UserDetailsComponent },
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
        // {enableTracing: true}
    )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
