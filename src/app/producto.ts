export class Producto {
    id;
    nombre;
    marca;
    precio;
    categoria;


    constructor(id, nombre, marca, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.categoria = categoria;
    }
}

export const PRODUCTOS = [
    {id: 1, nombre: 'Producto1', marca: 'Marca1', precio: 'Precio1', categoria: 'Categoria1'},
    {id: 2, nombre: 'Producto2', marca: 'Marca2', precio: 'Precio2', categoria: 'Categoria2'},
    {id: 3, nombre: 'Producto3', marca: 'Marca3', precio: 'Precio3', categoria: 'Categoria3'},
    {id: 4, nombre: 'Producto4', marca: 'Marca4', precio: 'Precio4', categoria: 'Categoria4'},
    {id: 5, nombre: 'Producto5', marca: 'Marca5', precio: 'Precio5', categoria: 'Categoria5'}
];
