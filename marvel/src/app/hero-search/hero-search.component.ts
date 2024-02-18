import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { Results } from '../interface/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  public heroes$: Observable<Results[]>;
  private searchTerms: Subject<string> = new Subject();

  constructor(private heroService: HeroService) {}

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  public ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((term: string) => term.trim() !== ''),
      switchMap((term: string) => {
        if (term.trim() === '') {
          return [];
        } else {
          return this.heroService.getSearchHeroes(term);
        }
      }),
      map((heroes: Results[]) => heroes.slice(0, 5))
    );
  }
}