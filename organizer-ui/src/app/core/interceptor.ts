import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpUserEvent, HttpErrorResponse,
    HttpRequest, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpEvent } from '@angular/common/http';
import { TokenStorage } from './token.storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private router: Router, private token: TokenStorage) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
     Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        // const idToken = localStorage.getItem('id_token');
        let authReq = req;

        if (this.token.getToken()) {
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())
            });
            // console.log(this.token.getToken());
            console.log(authReq);
            return next.handle(authReq);
        } else {
            console.log('No token!');
            return next.handle(req);
        }
    }

    // intercept(req: HttpRequest<any>, next: HttpHandler):
    // Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    //     let authReq = req;
    //     if (this.token.getToken() != null) {
    //         authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' +
    //          this.token.getToken())});
    //     }
    //     return next.handle(authReq).pipe(
    //         tap(
    //         (err: any) => {
    //             if (err instanceof HttpErrorResponse) {
    //                 console.log(err);
    //                 console.log('req url ::' + req.url);
    //                 if (err.status === 401) {
    //                     this.router.navigate(['users']);
    //                 }
    //             }
    //         }
    //     ));
    // }
}
