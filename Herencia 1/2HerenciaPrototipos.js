var persona_uno = {
    nombre: "Juan",
    saludar: function () {
        console.log("Hola, soy " + this.nombre);
    }
}
console.log(persona_uno);

var persona_dos = Object.create(persona_uno);
console.log(persona_dos);