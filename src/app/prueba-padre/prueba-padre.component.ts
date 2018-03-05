import {Component, OnInit} from '@angular/core';
import {PRODUCTOS} from '../producto';

@Component({
    selector: 'app-prueba-padre',
    templateUrl: './prueba-padre.component.html',
    styleUrls: ['./prueba-padre.component.css']
})
export class PruebaPadreComponent implements OnInit {

    titulo = 'EJEMPLO';
    productos = PRODUCTOS;
    tienda = 'MyStore';

    nombreEjercicio = 'Este es el nombre del ejercicio';

    constructor() {
    }

    ngOnInit() {
    }

}
