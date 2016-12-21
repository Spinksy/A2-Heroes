import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchmap';

import { HeroService } from '../shared/services/hero.service';
import { Hero } from '../shared/models/hero';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: [ 'hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    
    hero: Hero;
    
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
        ) { }

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void { 
        
        this.route.params
        .switchMap((params: Params) => this.heroService.get(+params['id']))
        .subscribe(hero => this.hero = hero);
    }
}