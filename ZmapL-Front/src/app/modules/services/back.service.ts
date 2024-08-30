import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVeeamMap } from '../interface/IVeeamMap';
import { Observable, retry } from 'rxjs';
import { IFortigateMap } from '../interface/IFortigateMap';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  SERVER_URL = '/api';
  constructor(private http: HttpClient) {}

  public getVeeamMap(): Observable<IVeeamMap[]> {
    return this.http
      .get<IVeeamMap[]>(`${this.SERVER_URL}/veeam`)
      .pipe(retry(2));
  }

  public addVeeamMap(veeamMap: IVeeamMap): Observable<IVeeamMap[]> {
    return this.http
      .post<IVeeamMap[]>(`${this.SERVER_URL}/veeam`,veeamMap)
      .pipe(retry(2));
  }

  public editVeeamMap(veeamMap: IVeeamMap): Observable<IVeeamMap[]> {
    return this.http
      .put<IVeeamMap[]>(`${this.SERVER_URL}/veeam/${veeamMap.id}`,veeamMap)
      .pipe(retry(2));
  }

  public deleteVeeamMap(veeamMap: IVeeamMap): Observable<IVeeamMap[]> {
    return this.http
      .delete<IVeeamMap[]>(`${this.SERVER_URL}/veeam/${veeamMap.id}`)
      .pipe(retry(2));
  }

  public getFortigateMap(): Observable<IFortigateMap[]> {
    return this.http
      .get<IFortigateMap[]>(`${this.SERVER_URL}/fortigate`)
      .pipe(retry(2));
  }

  public addFortigateMap(fortigateMap: IFortigateMap): Observable<IFortigateMap[]> {
    return this.http
      .post<IFortigateMap[]>(`${this.SERVER_URL}/fortigate`,fortigateMap)
      .pipe(retry(2));
  }

  public editFortigateMap(fortigateMap: IFortigateMap): Observable<IFortigateMap[]> {
    return this.http
      .put<IFortigateMap[]>(`${this.SERVER_URL}/fortigate/${fortigateMap.id}`,fortigateMap)
      .pipe(retry(2));
  }

  public deleteFortigateMap(fortigateMap: IFortigateMap): Observable<IFortigateMap[]> {
    return this.http
      .delete<IFortigateMap[]>(`${this.SERVER_URL}/fortigate/${fortigateMap.id}`)
      .pipe(retry(2));
  }
}
