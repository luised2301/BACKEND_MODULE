
//? Crear una funcion que reciba un nombre del proceso
//? Y en esa misma funcion imprimirla con color arcoiris. 
//? Utiliza el paquete colors

var colors = require('colors');
colors.enable();
 


function checkName (name) {
    console.log(`Bienvenido ${name}`.rainbow)
}

checkName (process.argv[2])
