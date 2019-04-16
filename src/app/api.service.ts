import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hero} from './hero';

export const rand = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min);

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token = '106608157204417/';
  private url = 'https://www.superheroapi.com/api.php/';

  constructor(private  http: HttpClient) {
    // this.getHero().subscribe(res => console.log(res))
  }

  public getHero(): Observable<Hero> {
    return this.http.get<Hero>(`${this.url}${this.token}${rand(1, 731)}`);
  }

}
