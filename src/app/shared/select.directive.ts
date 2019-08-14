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
            const el = e.target;
            if(el.classList.contains(this.elClass)) {
                const list = Array.from(el.parentElement.children);
                list.forEach(child => {
                    this.renderer.removeClass(child, this.toggleClass);
                })
                this.renderer.addClass(el, this.toggleClass);
            }
        });
    }
}