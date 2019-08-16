import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HeroesService } from './heroes.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroesService: HeroesService) {}

    ngOnInit() {
        this.heroes = this.heroesService.getHeroes();
        this.heroesService.addedNewHero.subscribe(() => {
            this.heroes = this.heroesService.getHeroes();
        })
    }
}