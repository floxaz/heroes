import { Component } from '@angular/core';

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
            console.log(this.bodyId);
        }
    }

    onColorClick(e) {
        if(e.target.classList.contains('color__choice')) {
            this.color = e.target.style.backgroundColor;
        }
    }
}