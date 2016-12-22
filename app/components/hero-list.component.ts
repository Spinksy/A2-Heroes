import { Component, Input, Output, EventEmitter } from '@angular/core';

import { HeroService } from '../shared/services/hero.service';
import { Hero } from '../shared/models/Hero';

@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html',
    styleUrls: ['hero-list.component.css'],
    providers: [Hero]
})
export class HeroListComponent {

    selectedHero: Hero;
    @Input() heroes: Hero[];
    @Output() onSelectedHero = new EventEmitter<Hero>();

    constructor(private heroService: HeroService){ };

    onSelect(hero: Hero): void {
        this.onSelectedHero.emit(hero);
    }

    add(name: string): void {
        name = name.trim();
        
        if (!name) { 
            return; 
        }
        
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }
}