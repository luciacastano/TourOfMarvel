import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Results } from '../interface/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Results[];
  offset: number = 0;

  constructor(private heroService: HeroService) { }

  public ngOnInit(): void {
    this.heroService.getAllHeros(this.offset).subscribe((heroes: Results[])=>this.heroes=heroes);
  }

  public back(): void {
    if (this.offset >= 20) {
      this.offset = this.offset - 20;
      this.heroService.getAllHeros(this.offset).subscribe((heroes: Results[])=>this.heroes=heroes);
    }
  }

  public next(): void {
    this.offset = this.offset + 20;
    this.heroService.getAllHeros(this.offset).subscribe((heroes: Results[])=>this.heroes=heroes);
  }
}
