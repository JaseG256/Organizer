import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable()
export class UserService {

    constructor(private httpclient: HttpClient) {}

    private userUrl = 'http://localhost:8080/api';

    public getUsers() {
        return this.httpclient.get<User[]>(this.userUrl + '/users');
    }

    public deleteUser(user) {
        return this.httpclient.delete(this.userUrl + '/' + user.id);
    }

    public createUser(user) {
        return this.httpclient.post(this.userUrl + '/auth/signup', user);
    }
}
