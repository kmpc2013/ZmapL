import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IVeeamMap } from '../interface/IVeeamMap';

@Injectable({
  providedIn: 'root',
})
export class BackService {
  SERVER_URL = '/api';
  constructor(private http: HttpClient) {}

  public getVeeamMap(): Observable<IVeeamMap[]> {
    return this.http
      .get<IVeeamMap[]>(`${this.SERVER_URL}/veeam`)
      .pipe(retry(2));
  }
}
