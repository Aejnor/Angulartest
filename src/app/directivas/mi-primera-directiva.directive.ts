import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appMiPrimeraDirectiva]'
})
export class MiPrimeraDirectivaDirective {

    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'blue';
        el.nativeElement.style.color = 'yellow';
    }

    @HostListener('document:keypress', ['$event']) onKeypressHandler(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.el.nativeElement.style.backgroundColor = 'red';
        }
    }

    @HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.el.nativeElement.style.backgroundColor = 'blue';
        }

    }
}