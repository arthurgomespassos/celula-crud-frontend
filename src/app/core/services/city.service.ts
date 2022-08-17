import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { City, CityList } from '../models/interfaces/City';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  private url: string = 'http://localhost:3000/city';

  constructor(
    private http: HttpClient
  ) {}

  public getById(id: number): Observable<City> {
    return this.http.get<City>(`${this.url}/${id}`).pipe(
      tap((res) => {
        return res;
      })
    );
  }

  public getList(): Observable<CityList> {
    return this.http.get<CityList>(this.url).pipe(
      tap((res) => {
        return res;
      })
    );
  }

  public deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      tap((res) => {
        return res;
      })
    );
  }

  public edit(city: City): Observable<City> {
    return this.http.put<City>(`${this.url}/${city.id}`, city).pipe(
      tap((res) => {
        return res;
      })
    );
  }

  public create(city: Pick<City, 'name' | 'population' | 'state'>): Observable<City> {
    return this.http.post<City>(this.url, city).pipe(
      tap((res) => {
        return res;
      })
    );
  }
}
