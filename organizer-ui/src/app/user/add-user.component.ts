import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../core/input-error-state-matcher.component';
import { AuthService } from '../core/auth.service';

@Component({
    templateUrl: './add-user.component.html'
})
export class AddUserComponent {

    user: User = new User();
    addUserFormControl = new FormControl('', [
        Validators.required,
        Validators.email
    ]);

    matcher = new MyErrorStateMatcher();

    constructor(private router: Router, private userService: UserService, private authService: AuthService) { }

    createUser() {
        this.authService.registerUser(this.user)
        .subscribe(
            res => {
                console.log(res);
                // localStorage.setItem('token', JSON.stringify(res.accessToken)),
                // this.router.navigate(['api/users']);
            // alert('User created successfully'),
            },
            err => console.log(err)
            );
    }

    // createUser(): void {
    //     this.userService.createUser(this.user)
    //     .subscribe(data => {
    //         alert('User created successfully.');
    //     });
    // }
}
