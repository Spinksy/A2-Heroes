import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../shared/models/Hero'

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    constructor() { }

    @Input() hero: Hero;

    ngOnInit() { }
}