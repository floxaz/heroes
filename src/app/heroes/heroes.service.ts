import { EventEmitter } from '@angular/core';
import { Hero } from '../shared/hero.model';

export class HeroesService {
    private heroes: Hero[] = [];
    addedNewHero = new EventEmitter<void>();

    addNewHero(name: string, color: string, head: string, body: string) {
        const hero = new Hero(name, color, head, body);
        this.heroes.push(hero);
        this.addedNewHero.emit();
    }

    getHeroes() {
        return this.heroes.slice();
    }
}