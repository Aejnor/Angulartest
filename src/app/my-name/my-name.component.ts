import {Component} from '@angular/core';
import {Producto, PRODUCTOS} from '../producto';
import {Factura, FACTURAS} from '../factura';


@Component({
    selector: 'app-my-name',
    templateUrl: './my-name.component.html',
    styleUrls: ['./my-name.component.css']
})
export class MyNameComponent {
    name = 'hulio';
    surname = 'surmano';
    edad = 20;

    esInvisible = false;
    colorLetra = true;
    valida = 'is-valid';
    boleanotest = true;
    esSuccess = false;
    mostrarDiv = false;
    nombrePersonaje = '';

    idpar = false;

    producto2 = PRODUCTOS;

    producto = new Producto('1', 'Julio', 'Joer', '2323423523555', 'erer');

    changeBadge() {
        this.esSuccess ? this.esSuccess = false : this.esSuccess = true;
    }

    changeInvisible() {
        this.esInvisible ? this.esInvisible = false : this.esInvisible = true;
    }

    deleteHero() {
        alert('HULIOOOOOOOOOOOO');
    }

    dameNombre() {
        return 'Mi nombre es ' + this.name + ', mi apellido es ' + this.surname + ' y mi edad es ' + this.edad + '.';
    }

    toogleDiv() {
        this.mostrarDiv ? this.mostrarDiv = false : this.mostrarDiv = true;
    }

    productoid(id) {
        return parseInt(id, 10) % 2 === 0;
    }

    getColor(categoria) {
        switch (categoria) {
            case 'Categoria1':
                return 'yellow';
            case 'Categoria3':
                return 'blue';
            case 'Categoria5':
                return 'purple';
        }
    }


}
