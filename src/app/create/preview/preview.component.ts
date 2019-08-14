import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
    @Input('name') name: string;
    @Input ('color') color: string;
    @Input('headId') headId: string;
}