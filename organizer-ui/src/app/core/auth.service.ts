import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';
import { TokenStorage } from './token.storage';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private token: TokenStorage) { }

    attemptAuth(username: string, password: string): Observable<any> {
        const credentials = { username: username, password: password };

        return this.http.post<any>('http://localhost:8080/login', credentials)
        .pipe(
         tap(res => this.token.saveToken(res.token))
        );

        // const credentials = { username: username, password: password };
        // console.log('attemptAuth ::');
        // console.log(credentials);
        // // console.log(Headers);
        // return this.http.post<any>('http://localhost:8080/login', credentials)
        // .pipe(
        //     tap(data => this.token.saveToken(data.token)));
    }

    // private setSession(authResult) {
    //     const expiresAt = moment().add(authResult.expiresIn, 'second');

    //     localStorage.setItem('id_token', authResult.idToken);
    //     localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    // }

    // logout() {
    //     localStorage.removeItem('id_token');
    //     // localStorage.removeItem('expires_at');
    // }

    // public isLoggedIn() {
    //     return moment().isBefore(this.getExpiration());
    // }

    // isLoggedOut() {
    //     return !this.isLoggedIn();
    // }

    // getExpiration() {
    //     const expiration = localStorage.getItem('expires_at');
    //     const expiresAt = JSON.parse(expiration);
    //     return moment(expiresAt);
    // }



}
