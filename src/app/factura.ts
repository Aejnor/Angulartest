export class Factura {
    id;
    nombre;
    precio;


    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


export const FACTURAS = [
    {id: 1, nombre: 'Producto1', precio: 'Precio1'},
    {id: 2, nombre: 'Producto2', precio: 'Precio2'},
    {id: 3, nombre: 'Producto3', precio: 'Precio3'},
    {id: 4, nombre: 'Producto4', precio: 'Precio4'},
    {id: 5, nombre: 'Producto5', precio: 'Precio5'},
];
