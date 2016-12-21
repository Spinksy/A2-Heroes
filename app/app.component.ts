import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Hero } from './models/Hero';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ Hero ]
})
export class AppComponent  { 

  title: string = 'Tour of Heroes';

  constructor(public hero: Hero, private titleService: Title ) {
    this.hero = {id: 1, name: 'Batman'};
  }

  ngOnInit(){
    this.titleService.setTitle(this.title);
  }
}
