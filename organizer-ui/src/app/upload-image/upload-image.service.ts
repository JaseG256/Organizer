import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class UploadImageService {

    constructor(private http: HttpClient) { }
}
