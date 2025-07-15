
class vehiculo {
    constructor(marca , modelo , año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año
    }
    Obtenerdetalles() {
        console.log("La marca del vehiculo es: ",this.marca," El modelo es: ", this.modelo, "Del año: ",this.año)
    }
}

class coche extends vehiculo {
    constructor(marca , modelo , año, numPuertas) {
        super(marca,modelo,año)
        this.numPuertas = numPuertas
    }
        Obtenerdetalles() {
        console.log("La marca del vehiculo es: ",this.marca," El modelo es: ", this.modelo, "Del año: ",this.año, "y tengo:",this.numPuertas, "Puertas")
    }

}

class moto extends vehiculo{
    constructor(marca , modelo , año, cilindrada) {
        super(marca,modelo,año)
        this.cilindrada = cilindrada
    }
    Obtenerdetalles() {
        console.log("La marca del vehiculo es: ",this.marca," El modelo es: ", this.modelo, "Del año: ",this.año, "y es cilindraje tipo: ", this.cilindrada)
    }

}

const carro = new coche ("chevrolet", "renold","2020","5")
carro.Obtenerdetalles()
const moto1 = new moto ("Yamaha","MT09","2020","900cc")
moto1.Obtenerdetalles()