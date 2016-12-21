import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/models/hero';
import { HeroService } from '../shared/services/hero.service'
import { HeroDetailComponent, HeroListComponent } from './component.index';

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: 'hero.component.html',
  providers: [ Hero, HeroDetailComponent, HeroListComponent ]
})
export class HeroComponent  { 

  heroes: Hero[];
  selectedHero: Hero;
  hero: Hero;

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void{
    this.heroService.query().then(heroes => this.heroes = heroes);
  }

  heroSelected(hero: Hero): void {
    this.selectedHero = this.selectedHero ? hero.name == this.selectedHero.name ? undefined : hero : hero;
   }

  ngOnInit(): void{
    this.getHeroes();
  }
}
