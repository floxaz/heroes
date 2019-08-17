import { Component, ViewChild, ElementRef } from '@angular/core';
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
    @ViewChild('inputSection', {static: false}) inputSection: ElementRef;
    @ViewChild('headSection', {static: false}) headSection: ElementRef;
    @ViewChild('bodySection', {static: false}) bodySection: ElementRef;
    @ViewChild('colorSection', {static: false}) colorSection: ElementRef;

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
    
    cleanForm() {
        const removeOutline = (section: ElementRef) => {
            const items = Array.from(section.nativeElement.children);
            items.forEach(item => {
                if(item.classList.contains('outlined')) {
                    item.classList.remove('outlined');
                }
            })
        }

        this.inputSection.nativeElement.value = '';
        removeOutline(this.headSection);
        removeOutline(this.bodySection);
        removeOutline(this.colorSection);
        this.name = '';
        this.color = '';
        this.headId = '';
        this.bodyId = '';
    }

    onCreateClick() {
        this.heroesService.addNewHero(this.name, this.color, this.headId, this.bodyId);
        this.cleanForm();
    }
}