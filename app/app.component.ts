import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Hero } from './shared/models/Hero';
import { HeroService } from './shared/services/hero.service'
import { HeroDetailComponent, HeroListComponent } from './components/component.index';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ Hero, HeroService, HeroDetailComponent, HeroListComponent ]
})
export class AppComponent  { 

  heroes: Hero[];
  title: string = 'Tour of Heroes';
  selectedHero: Hero;
  hero: Hero;

  constructor(hero: Hero, private titleService: Title, private heroService: HeroService) {
    this.hero = {id: 1, name: 'Batman'};
    this.heroes = heroService.query();
  }

  heroSelected(hero: Hero): void {
    console.log('Received ' + JSON.stringify(hero));
    this.selectedHero = this.selectedHero ? hero.name == this.selectedHero.name ? undefined : hero : hero;
   }

  ngOnInit(){
    this.titleService.setTitle(this.title);
  }
}
