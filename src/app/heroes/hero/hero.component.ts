import { Component, Input } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
    selector: 'app-hero',
    templateUrl: '/hero.component.html',
    styleUrls: ['/hero.component.scss']
})
export class HeroComponent {
    @Input() name: string;
    @Input() head: string;
    @Input() body: string;
    @Input() color: string;
    @Input() id: number;

    constructor(private heroesService: HeroesService) {}

    onDeleteClick() {
        this.heroesService.removeHero(this.id);
    }
}