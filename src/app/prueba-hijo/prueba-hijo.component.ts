import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Producto} from '../producto';

@Component({
    selector: 'app-prueba-hijo',
    templateUrl: './prueba-hijo.component.html',
    styleUrls: ['./prueba-hijo.component.css']
})
export class PruebaHijoComponent implements OnInit {

    @Input() producto: Producto;
    @Input('tienda') nombreTienda: String;

    @Output() cambiarNombre = new EventEmitter<string>();


    cambiarNombreEnPadre(nombre: string) {
        this.cambiarNombre.emit(nombre);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
