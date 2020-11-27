

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { concat } from 'rxjs/operator/concat';

@Injectable()
export class HomeService {

    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }
    getData() {
        return this.http.get('http://localhost:4000/api/user');
    }
    exportCSV(){
        return this.http.get('http://localhost:4000/api/user/export');
    }
    editUpdate(value) {
        const headers = new HttpHeaders();
        // const data = JSON.stringify(value);
        headers.append('Content-type', 'application/json');
        return this.http.post('http://127.0.0.1:4000/api/user/update', value, { headers: headers })
            // .map((res: Response) => res.json())
    }
}





