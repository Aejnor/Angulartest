import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appMiSegundaDirectiva]'
})
export class MiSegundaDirectivaDirective {

    @Input() defaultColor: string;
    @Input('appMiSegundaDirectiva') colorAsignado: String;

    constructor(private el: ElementRef) {

    }

    @HostListener('mouseenter') alEntrarElRaton() {
        this.el.nativeElement.style.backgroundColor = this.colorAsignado || this.defaultColor;
    }

    @HostListener('mouseleave') alSalirElRaton() {
        this.el.nativeElement.style.backgroundColor = null;
    }
}
