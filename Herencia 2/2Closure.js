function iniciar() {
    var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
    function closure() {  // La función mostrarNombre es una función interna, una clausura.
        console.log(nombre);  // Usa una variable declarada en la función externa.
    }
    closure();
}
iniciar();


// https://developer.mozilla.org/es/docs/Web/JavaScript/Closures
/* Sumador */
function creaSumador(x) {
    return function (y) {
        return x + y;
    };
}

/* 
En este ejemplo, hemos definido una función creaSumador(x) que toma
un argumento único x y devuelve una nueva función.
Esa nueva función toma un único argumento y, devolviendo la suma de x + y
*/

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12
/* Sumador */

/* Contador */
/* 
Los contadores son indepednientes. Su entorno durante la llamada de la
función makeCounter() es diferente cada vez.
La variable del closure llamada privateCounter contiene
una instancia diferente cada vez.
 */
var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* Muestra 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* Muestra 2 */
Counter1.decrement();
console.log(Counter1.value()); /* Muestra 1 */
console.log(Counter2.value()); /* Muestra 0 */
/* Contador */