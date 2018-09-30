import { Injectable } from '@angular/core';
import * as moment from 'moment';

const TOKEN_KEY = 'Authtoken';

@Injectable()
export class TokenStorage {

    constructor() { }

    signOut() {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.clear();
    }

    public saveToken(token: string) {
        // window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
        // const expiresAt = moment().add(this.getToken().expiresIn, 'second');
    }

    public getToken(): string {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
}
