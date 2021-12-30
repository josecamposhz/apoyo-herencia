var Counter = (function () {
    let privateCounter = 0;
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
})();

console.log(Counter.value()); /* Muestra 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* Muestra 2 */
Counter.decrement();
console.log(Counter.value()); /* Muestra 1 */ 