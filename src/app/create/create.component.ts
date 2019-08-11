import { Component } from '@angular/core';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent {
    name: string;
    color: string;
    onColorClick(e) {
        if(e.target.classList.contains('color__choice')) {
            this.color = e.target.style.backgroundColor;
        }
    }
}