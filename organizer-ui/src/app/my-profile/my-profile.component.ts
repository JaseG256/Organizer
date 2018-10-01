import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe(
        data => {
          this.user = data;
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('bearer');
    this.router.navigate(['api/auth/login']);
  }

}
