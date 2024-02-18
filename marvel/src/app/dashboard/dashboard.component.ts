import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Results } from '../interface/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Results[];

  constructor(private heroService: HeroService) { }

  public ngOnInit(): void {
    this.heroService.getRandomHeroes(12).subscribe((heroes: Results[])=>this.heroes=heroes);
  }
}
