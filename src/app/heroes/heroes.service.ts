import { EventEmitter } from '@angular/core';
import { Hero } from '../shared/hero.model';

export class HeroesService {
    private heroes: Hero[] = [];
    heroesChanged = new EventEmitter<void>();

    addNewHero(name: string, color: string, head: string, body: string) {
        const hero = new Hero(name, color, head, body);
        this.heroes.push(hero);
        this.heroesChanged.emit();
    }

    removeHero(index: number) {
        this.heroes.splice(index, 1);
        this.heroesChanged.emit();
    }

    getHeroes() {
        return this.heroes.slice();
    }
}