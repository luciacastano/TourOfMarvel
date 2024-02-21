import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero, Results } from '../interface/hero';


@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'https://gateway.marvel.com/v1/public/characters';  // URL to web api
  private alcachofa = '?ts=alcachofa&apikey=564deb677da1743d1cb51f8563a23135&hash=3c2d4321ad9ef6ccaf1c4cfa1504acb9'
  private alcachofa2 = '&ts=alcachofa&apikey=564deb677da1743d1cb51f8563a23135&hash=3c2d4321ad9ef6ccaf1c4cfa1504acb9'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getAllHeros(offset: number): Observable<Results[]> {
    return this.http.get<Hero>(this.heroesUrl + this.alcachofa + "&offset=" + offset)
      .pipe(map((result: Hero) => result.data.results))
  }

  public getRandomHeroes(limit: number): Observable<Results[]> {
    return this.http.get<Hero>(this.heroesUrl + this.alcachofa + "&offset=" + Math.floor(Math.random() * 1564) + '&limit=' + limit)
      .pipe(map((result: Hero) => result.data.results))
  }

  public getIdHeroes(id:number): Observable<Results[]> {
    return this.http.get<Hero>(this.heroesUrl  + "/" + id + this.alcachofa) 
      .pipe(map((result: Hero) => result.data.results))
  }
 
  public getSearchHeroes(text: string): Observable<Results[]> {
    return this.http.get<Hero>(this.heroesUrl + "?nameStartsWith=" + text  + this.alcachofa2 )
      .pipe(map((result: Hero) => result.data.results))
  }
}
