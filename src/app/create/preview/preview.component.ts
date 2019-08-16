import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
    @Input() name: string;
    @Input() color: string;
    @Input() headId: string;
    @Input() bodyId: string;
}