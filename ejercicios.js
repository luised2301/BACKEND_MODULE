//! NODE JS SESSION 2
//! Ejercicio 1
//? Cosntruir una funcion que separe los nombres largos de los cortos 
//? un nombre largo es aquiel que supera los 4 caracteres de longitud

// const nombres = ["Rodolfo", "Araceli", "Brisa", "Eduardo", "Gio", "Jose", "Luis", "Marco", "Mariana", "Pete", "Sebastian", "Sofia"]
// function separateNames(array){
//     const nombresCortos = [];
//     const nombresLargos = [];
//     array.forEach(cv => {
//         if(cv.length<4){
//             nombresCortos.push(cv)
//         }
//         else{
//             nombresLargos.push(cv)
//         }
//     });
// return [nombresCortos,nombresLargos]

// }

// const [nombresCortos, nombresLargos]=separateNames(nombres);

//* console.log("Nombres Cortos:",nombresCortos)
//* console.log("Nombres Largos:",nombresLargos)


//!Ejercicio 2
//*? Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
//? Input: ["Ale", "Mariana", "Adrian"]...
//? Output:
//? {
//? 	0: {
//? 		name: "Ale", -> string
//? 		length: 3, -> numero
//?		isGreaterThanFour: true -> booleano
//? 	}
//? }

const nombres = ["Luis","Rodolfo", "Araceli", "Brisa", "Eduardo", "Gio", "Jose", "Luis", "Marco", "Mariana", "Pete", "Sebastian", "Sofia"]

nameDetails={};

function transformarNombres (array, object) {
    obj={}
    array.forEach((cv,i,) => {
        object[i]={
            name:cv,
            length: cv.length,
            isGreaterThanFour: (cv.length>4)
        }
        return obj+object[i]
    });
    return object
};

transformarNombres(nombres, nameDetails)
console.log("nameDetails",nameDetails)

