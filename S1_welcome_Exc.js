
function checkName (name) {

 if ( process.argv[2]){
    console.log(`Bienvenido ${name}`)
 }
 else
    console.log(`Fuera de aqui!`)
}
checkName (process.argv[2])


// 1 - Funcion que recoiba de parametro un nombre del
// process.argv, y si existe que me imprima “Bienvenido y el nombre”
// SI NO, imprimir “Afuera de aqui”