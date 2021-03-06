import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'username', 'email'];
  dataSource = new MatTableDataSource<User>();
  users: User[];
  selectedUser: User;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private router: Router, private userService: UserService) {

   }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
    });
    this.userService.getUsers()
      .subscribe(data => {
        this.dataSource.data = data;
      }
    );
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showDetails(row: any) {
    this.router.navigate(['api/users/' + row.username]);
  }

  deleteUser(user: User): void {
    // this.userService.deleteUser(user)
    //   .subscribe( data => {
    //     this.users = this.users.filter(u => u !== user);
    //   });
  }

}
