// class Usuario {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }
//     saludar() {
//         console.log("Bienvenido usuario: " + this.nombre);
//     }
// }
// class Administrador extends Usuario {
//     constructor(nombre) {
//         super(nombre);
//     }
//     saludar() {
//         console.log("Panel de Administración - Usuario: " +
//             this.nombre);
//     }
// }
// let adminUser = new Administrador("Juan");
// adminUser.saludar();

class Usuario {
    constructor(nombre) {
        let _nombre = nombre;
        this.getNombre = () => _nombre;
        this.setNombre = (nuevo_nombre) => _nombre = nuevo_nombre;
    }

    get nombre() {
        return this.getNombre();
    }

    set nombre(nuevo_nombre) {
        this.setNombre(nuevo_nombre);
    }

    saludar() {
        console.log("Bienvenido usuario: " + this.nombre);
    }
}
class Administrador extends Usuario {
    constructor(nombre) {
        super(nombre);
    }
    saludar() {
        console.log("Panel de Administración - Usuario: " + this.nombre);
    }
}

let adminUser = new Administrador("Juan");
console.log(adminUser.nombre);
console.log(adminUser._nombre);
adminUser.saludar();
adminUser.nombre = 'Petra';
console.log(adminUser.nombre);
adminUser.saludar();
