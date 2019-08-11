import { 
    Directive, ElementRef,
    Renderer2, OnInit, 
    Input
} from '@angular/core';

@Directive({
    selector: '[appSelect]'
})
export class SelectDirective implements OnInit {
    @Input ('elClass') elClass: string;
    @Input('toggleClass') toggleClass: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.listen(this.elRef.nativeElement, 'click', e => {
            if(e.target.classList.contains(this.elClass)) {
                const list = Array.from(e.target.parentElement.children);
                list.forEach(child => {
                    this.renderer.removeClass(child, this.toggleClass);
                })
                this.renderer.addClass(e.target, this.toggleClass);
            }
        });
    }
}