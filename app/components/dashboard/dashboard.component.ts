import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/services/hero.service';
import { Hero } from '../../shared/models/hero';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.query()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
}