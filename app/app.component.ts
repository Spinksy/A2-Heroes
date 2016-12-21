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

  title: string = 'Tour of Heroes';

  constructor(private titleService: Title) {
  }

  ngOnInit(): void{
    this.titleService.setTitle(this.title);
  }
}
