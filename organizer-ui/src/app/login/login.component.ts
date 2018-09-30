import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from '../core/auth.service';
import { TokenStorage } from '../core/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService,
  private token: TokenStorage) { }

  ngOnInit() {
  }

  loginUser(): void {
    this.authService.attemptAuth(this.username, this.password)
      .subscribe(
        res => { console.log(res),
        localStorage.setItem('token', JSON.stringify(res.accessToken)),
        localStorage.setItem('bearer', JSON.stringify(res.tokenType));
        },
        err => console.log(err)
    );

    // if (this.username === 'admin' && this.password === 'admin') {
    //   this.router.navigate(['users']);
    // } else {
    //   alert('Invalid Credentials');
    // }
  }

}
