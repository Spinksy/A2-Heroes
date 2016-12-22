import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/models/hero';
import { HeroService } from '../shared/services/hero.service'
import { HeroDetailComponent, HeroListComponent } from './component.index';

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
  providers: [ Hero, HeroDetailComponent, HeroListComponent ]
})
export class HeroComponent  { 

  heroes: Hero[];
  selectedHero: Hero;
  hero: Hero;
  
  constructor(private heroService: HeroService,
  private router: Router) {
  }

  getHeroes(): void{
    this.heroService.query().then(heroes => this.heroes = heroes);
  }

  heroSelected(hero: Hero): void {
    this.selectedHero = this.selectedHero ? hero.name == this.selectedHero.name ? undefined : hero : hero;
   }

   goToDetail(): void {
     this.router.navigate(['/detail', this.selectedHero.id]);
   }

  ngOnInit(): void{
    this.getHeroes();
  }
}
