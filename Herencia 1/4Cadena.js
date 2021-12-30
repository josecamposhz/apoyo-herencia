var padre = {
    nombre: 'Juan',
    saludar: function () {
        console.log('Hola, soy ' + this.nombre);
    },
};
console.log(padre);

var hijo = Object.create(padre);
hijo.nombre = "Claudio";
console.log(hijo);

var nieto = Object.create(hijo);
console.log(nieto.nombre); // Claudio o Juan