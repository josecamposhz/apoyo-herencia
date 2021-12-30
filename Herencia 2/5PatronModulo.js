let miPrimerModulo = (() => {
    let funcionPrivada = (texto) => {
        console.log(texto);
    };

    return {
        funcionPublica: (texto) => funcionPrivada(texto),
    };
})();

const miModulo = (() => {
    let miVariablePrivada = 0;
    let miMetodoPrivado = (valor1) => {
        miVariablePrivada++;
        console.log(valor1);
        console.log(miVariablePrivada);
    };

    return {
        // Una variable pública
        miVariablePublica: 'hola',
        // Una función pública que utiliza los elementos privados
        miFuncionPublica: (valor2) => {
            miMetodoPrivado(valor2);
        },
    };
})();

console.log(miModulo);
console.log(miModulo.miVariablePublica);
miModulo.miFuncionPublica("Valor externo");