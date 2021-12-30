class Vehiculo {
    constructor(marca, color, matricula) {
        this._marca = marca;
        this._color = color;
        this._matricula = matricula;
    }
}

class Coche extends Vehiculo {
    constructor(marca, color, matricula) {
        super(marca, color, matricula);
    }
}
class Moto extends Vehiculo {
    constructor(marca, color, matricula) {
        super(marca, color, matricula);
    }
}
class Bus extends Vehiculo {
}

let coche1 = new Coche('Toyota', 'Negro', '123ABC');
let moto1 = new Moto('Honda', 'Rojo', '456CDF');
let bus1 = new Bus('Fuso', 'Blanco', '678EDC');

console.log(coche1);
console.log(moto1);
console.log(bus1);
console.log(coche1.marca);
console.log(moto1.color);
console.log(bus1.matricula);