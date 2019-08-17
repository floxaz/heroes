import { Component, Input } from '@angular/core';

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
}