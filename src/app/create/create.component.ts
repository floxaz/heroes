import { Component } from '@angular/core';
import { HeroesService } from '../heroes/heroes.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent {
    name: string;
    color: string;
    headId: string;
    bodyId: string;

    constructor(private heroesService: HeroesService) {}

    onHeadClick(e) {
        if (e.target.classList.contains('head__choice')) {
            const headClass = e.target.classList.item(1);
            this.headId = headClass.split('--')[1];
        }
    }

    onBodyClick(e) {
        if(e.target.classList.contains('body__choice')) {
            const bodyClass = e.target.classList.item(1);
            this.bodyId = bodyClass.split('--')[1];
        }
    }

    onColorClick(e) {
        if(e.target.classList.contains('color__choice')) {
            this.color = e.target.style.backgroundColor;
        }
    }

    onCreateClick() {
        this.heroesService.addNewHero(this.name, this.color, this.headId, this.bodyId);
    }
}