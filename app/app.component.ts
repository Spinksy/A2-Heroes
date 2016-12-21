import { Component } from '@angular/core';
import { Hero } from './models/Hero';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ Hero ]
})
export class AppComponent  { 

  title: string = 'Tour of Heroes';

  constructor(public hero: Hero) {
    this.hero = {id: 1, name: 'Batman'};
  }
}
