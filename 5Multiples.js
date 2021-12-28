// Padre
class Vehiculo {
    constructor(nombre) {
        this._nombre = nombre;
    }
}

// Hijo
class Acuatico extends Vehiculo {
    navegar() {
        console.log("Navegando...")
    }
}

// Nietos
class Barco extends Acuatico {
    prenderMotor() {
        console.log("Encenciendo motores...")
    }
}

class Velero extends Acuatico {
    izarVelas() {
        console.log("Izar velas...")
    }
}