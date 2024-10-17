import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelosService {
  private readonly URL_APP = 'http://localhost:3001/app';
  private readonly URL_SELO = 'http://localhost:3002/selos';

  constructor(private readonly _httpClient: HttpClient) {}

  public getApp(): Observable<any> {
    return this._httpClient.get(this.URL_APP);
  }

  public getSelo(): Observable<any> {
    return this._httpClient.get(this.URL_SELO);
  }
}

