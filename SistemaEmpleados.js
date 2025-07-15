// Crea un sistema de clases para representar empleados de una empresa:
// 1.Clase Empleado con propiedades: nombre, edad, salarioBase y
// método calcularSalario() que devuelve el salario base.
// 2.Clase Gerente que herede de Empleado y añada bonificacion.
// Sobrescribe calcularSalario() para que sume la bonificación.
// 3.Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base

class Empleado {
    constructor(nombre,edad,salarioBase) {
        this.nombre=nombre;
        this.edad=edad;
        this.salarioBase = salarioBase
    }
    calcularSalario(){
        console.log("El salario es",this.salarioBase)
    }
}
class Gerente extends Empleado {
    constructor(nombre,edad,salarioBase, bonificacion) {
        super(nombre,edad,salarioBase);
        this.bonificacion=bonificacion
    }
        calcularSalario(){
            let salarioFinal = this.salarioBase + this.bonificacion
            console.log("El salario es",salarioFinal)
    }
}

class Desarrollador extends Empleado {
    constructor(nombre,edad,salarioBase, lenguaje) {
        super(nombre,edad,salarioBase)
        this.lenguaje=lenguaje
    }

    calcularSalario(){
        console.log("El salario es",this.salarioBase)
    }
}

const gerente1 = new Gerente ("Jaider","20",1200000,500000)
const Desarrollador1 = new Desarrollador("Jaider","22","1200000","JS")

gerente1.calcularSalario()
Desarrollador1.calcularSalario()