import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';
import { TokenStorage } from './token.storage';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthService {

    private signupUrl = 'http://localhost:8080/api/auth/signup';
    private loginUrl = 'http://localhost:8080/api/auth/login';
    constructor(private http: HttpClient) { }

    registerUser(user) {
        return this.http.post<any>(this.signupUrl, user);
    }

    attemptAuth(username: string, password: string): Observable<any> {
        const credentials = { username: username, password: password };
        return this.http.post<any>(this.loginUrl, credentials);

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
