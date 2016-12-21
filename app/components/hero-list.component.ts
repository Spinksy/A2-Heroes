import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../shared/models/Hero';

@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html',
    styleUrls: ['hero-list.component.css'],
    providers: [Hero]
})
export class HeroListComponent {

    @Input() heroes: Hero[];
    @Output() onSelectedHero = new EventEmitter<Hero>();

    onSelect(hero: Hero): void {
        console.log('Emitting selection');
        this.onSelectedHero.emit(hero);
    }
}