// 1.Clase Animal con nombre, edad y método emitirSonido().
// 2.Clase Perro que herede de Animal y sobrescriba emitirSonido().
// 3.Clase Gato que herede de Animal y sobrescriba emitirSonido().
// Crea instancias y haz que emitan sonidos.

class Animal {
    constructor(nombre,edad) {
        this.nombre = nombre;
        this.edad= edad;
    }
    emitirSonido(){
        console.log("");
            
        }
}

class Perro extends Animal {
    constructor(nombre , edad) {
        super(nombre,edad)
    }
    emitirSonido(){
        console.log("Guau guau");
            
    }
}

class Gato extends Animal {
    constructor(nombre , edad) {
        super(nombre,edad)
    }
    emitirSonido(){
        console.log("Miau miau");
            
    }
}

const perro1 = new Perro("Noah", "2")
const gato1 = new Gato("Rio","3")

perro1.emitirSonido()
gato1.emitirSonido()