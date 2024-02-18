import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../service/hero.service';
import { Results } from '../interface/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  heroes: Results[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  public ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id'); // + -> id de string a int para usarlo luego
    this.heroService.getIdHeroes(id).subscribe((heroes: Results[])=>this.heroes=heroes); 
  }

  public goBack(): void {
    this.location.back();
  }
}
