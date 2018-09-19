import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    attemptAuth(username: string, password: string): Observable<any> {
        const credentials = { username: username, password: password };
        console.log('attemptAuth ::');
        return this.http.post<any>('http://localhost:8080/login', credentials);
    }

}
