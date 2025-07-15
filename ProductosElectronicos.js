// 1.Clase Producto con nombre, precio, marca y método descripcion().
// 2.Clase Telefono que herede de Producto y añada almacenamiento, ram.
// 3.Clase Laptop que herede de Producto y añada procesador, pulgadas.

class Producto {
    constructor(nombre,precio,marca) {
        this.nombre=nombre;
        this.marca=marca;
        this.precio= precio;
    }
    descripcion(){
        console.log("El producto es:", this.nombre,"su marca es: ",this.marca,"su precio es:",this.precio)
    }
}
class Telefono extends Producto {
    constructor(nombre,precio,marca, almacenamiento , ram) {
        super(nombre,precio,marca)
        this.almacenamiento=almacenamiento;
        this.ram=ram;
    }
    descripcion(){
        console.log("El producto es:", this.nombre,"su marca es: ",this.marca,"su almacenamiento es:",this.almacenamiento,"Y su ram es:",this.ram,"su precio es:",this.precio)
    }
}

class Laptop extends Producto {
    constructor(nombre,precio,marca, procesador,pulgadas) {
        super(nombre,precio,marca);
        this.procesador=procesador;
        this.pulgadas=pulgadas;
    }
    descripcion(){
        console.log("El producto es:", this.nombre,"su marca es: ","Su procesador es: ",this.procesador,"y su numero de puladas son: ",this.pulgadas,this.marca,"su precio es:",this.precio)
    }
}

const Celular1 = new Telefono ("Redmi 14","900","Xiaomi","256","8G");
const Laptop1 = new Laptop("HP","1200","HP","Core i5","24");

Celular1.descripcion();
Laptop1.descripcion();