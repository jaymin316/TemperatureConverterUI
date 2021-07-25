import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UnitConverterService {
    private headers: HttpHeaders;
    private accessPointUrl  = 'https://localhost:44380/unitconversion';

    constructor(private http: HttpClient) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }

    public get() {
        return this.http.get(this.accessPointUrl, {headers: this.headers});
    }

    public convert(payload) {
        return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
    }
}
