import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['id', 'username', 'email'];
  dataSource = new MatTableDataSource<User>();
  // users: User[];

  constructor(private router: Router, private userService: UserService) {

   }

  ngOnInit() {
    // this.userService.getUsers()
    // .subscribe(data => {
    //   this.users = data;
    // });
    this.userService.getUsers()
      .subscribe(data => {
        this.dataSource.data = data;
      }
    );
  }

  deleteUser(user: User): void {
    // this.userService.deleteUser(user)
    //   .subscribe( data => {
    //     this.users = this.users.filter(u => u !== user);
    //   });
  }

}
