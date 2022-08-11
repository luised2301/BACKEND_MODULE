const fs = require("fs")
const colors =require("colors")


//! Ejercicio 2 Sesio 4
/**
 * Hacer una carpeta dentro de otra
 * Y eliminar el contenido de toda la carpeta de adentro
 * En pseudo-codigo
 * readdir -> leer directorio
 * rmdir -> eliminar directoio
 * unlink -> eliminar un archivo
 * fs.statSync(path[, options]) -> para ver los stats de un archivo o directorio 
 * (tip: para ver si algo es directorio)
 */
//  fs.readdir(path[, options], callback)
//  fs.statSync(path[, options])
//  fs.mkdir(path[, options], callback)
//  fs.rmdir(path[, options], callback)
//  fs.unlink(path, callback)
/*
1.-Leer el contenido de la carpeta.
2.-Ciclar el contenido que recibimos
    CICLO:
        1.-Checar si es una carpeta o no
        ///?SI es carpeta: 
            Volver a leer el contenido de la carpeta
            CICLO:
            SI esta vacia:
                Imprimir que esta vacio
            Si no:
                Cjecar si es una carpeta o no.
        ///?No Es una carpeta:
            Eliminar archivo.
FIN
/(esto es un ciclo infinito)
/*/

//!Regla de recursividad -> Tenemos que decirle cuando detenernos
//
const path ="dir1" //Se establece un directorio para ejecutar
let counter = 0  //Se da un contador para vigilar la recursividad
const removeAll = (path) =>{  //Se declara una funcion
    const content = fs.readdirSync(path,"utf-8"); //se pide a la funcion removeAll que lea el contenido de el path original
    console.log(`content of ${path}:`, content); //imprimimos el contenido del path original
    content.forEach((file)=>{//Se inicia un ciclo for each dentro de la carpeta path original
        const newPath= `${path}/${file}`; //Se crea un nuevo path dentro del ciclo 
        counter+=1; //Se suma 1 al contador para avisar que bajo 1 nivel de carpeta
    const isDirectory=fs.statSync(`${newPath}`).isDirectory()//Se revisa si el nuevo path es una carpeta
    if(isDirectory){ //si es una carpeta:
        removeAll(newPath)//Se ejecuta nuevamente a si misma.
        fs.rmdirSync(newPath)//y despues de ejecutarse a si misma dentro de la nueva carpeta encontrada se pide eliminarse    
        return//regresa 
    }
    counter -= 1; //si no es directorio, reduce en 1 el contador
    fs.unlinkSync(newPath)// y se elimina 
    })
    counter -= 1; //cuando termina de ejecutarse en cada file interno, reduce el contador en -1 en este punto ya debio de haber llegado al fondo y regresado  
    if(counter=== -1){ // se verifica si regreso al path original con esta condicion al contador
        fs.rmdirSync(path)//Se elimina el directorio del path original
    }
}

removeAll(path)