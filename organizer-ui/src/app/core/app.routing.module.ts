import { Routes, RouterModule, Route } from '@angular/router';
import { Component, NgModule } from '@angular/core';

import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../user/add-user.component';
import { LoginComponent } from '../login/login.component';
import { UserDetailsComponent } from '../user/user-details.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';

const indexRoute: Route = {
    path: '', component: UserComponent
};
const fallbackRoute: Route = {
    path: '**', component: LoginComponent
};
const routes: Routes = [
    {
        path: 'api/users',
        children: [
            {
                path: '',
                component: UserComponent
            },
            {
                path: 'users/:username',
                component: UserDetailsComponent
            }
        ]
    },
    {
        path: 'api/auth/signup', component: AddUserComponent
    },
    {
        path: 'api/auth/login', component: LoginComponent
    },
    {
        path: 'users/:username', component: UserDetailsComponent
    },
    {
        path: 'api/user/me', component: MyProfileComponent
    },
    indexRoute,
    fallbackRoute
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
