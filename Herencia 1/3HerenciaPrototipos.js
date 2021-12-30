// Clase Padre
function FiguraGeometrica(lado) {
    this.lado = lado;
}

// Clase Hija
function Poligono(lado) {
    // método call(), el cual llama a una función con un valor “this” asignado
    // y permite encadenar constructores
    FiguraGeometrica.call(this, lado);
}
// Indicarle a ambas clases que una es extensión de la otra
// esto lo lograremos mediante la instrucción “Object.create”, asignando al
// prototipo de la clase hija “Polígono” como nuevo objeto el prototipo de la clase padre:
Poligono.prototype = Object.create(FiguraGeometrica.prototype);

// crear un método para el cálculo del área del Polígono, agregandolo al prototipo de la clase
Poligono.prototype.calcularArea = function () {
    return this.lado * this.lado;
};
// Poligono.prototype.constructor = Poligono;

var cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea());

/* ES6 */
class FiguraGeometricaES6 {
	constructor(lado) {
		this.lado = lado;
	}
}
class PoligonoES6 extends FiguraGeometricaES6 {
	constructor(lado) {
		super(lado);
	}
	calcularArea() {
		return this.lado * this.lado;
	}
}

var cuadrado = new PoligonoES6(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea());