// 1.Clase Figura con propiedad color y método area() que devuelve 0.
// 2.Clase Rectangulo que herede de Figura y añada base, altura. Sobrescribe area().
// 3.Clase Circulo que herede de Figura y añada radio. Sobrescribe area().

class Figura {
    constructor(color) {
        this.color = color;
    }
    area(){
        let area = 0
        console.log("el area es: ",area);
    }
}
class Rectangulo extends Figura {
    constructor(color, base,altura) {
        super(color)
        this.base = base;
        this.altura=altura;
    }
    area(){
        let area = this.base * this.altura;
        console.log("el area es: ",area);
    }
}
class Circulo extends Figura {
    constructor(color,radio) {
        super(color)
        this.radio = radio;
    }
    area(){
        let area = 3.14 * (this.radio  * this.radio);
        console.log("el area es: ",area);
    }
}

const Rec = new Rectangulo("azul",4.10,6)
Rec.area()

const circ= new Circulo ("verde ", 5.7 )
circ.area()