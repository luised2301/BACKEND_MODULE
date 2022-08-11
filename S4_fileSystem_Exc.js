console.log("Api file system Session 2")

const fs = require("fs")
const colors =require("colors")


//! * Ejercicio 2
// * Con callbacks
// * 1 - Leer los archivos de un directorio y eliminarlos.
// * - Tienen que validar que tenga archivos, si no imprimir un console.log de no hay archivos
// */

fs.readdir("directorioprueba", "utf-8", (err,files)=>{
    if(err) throw err
    else
    if(files[0]==undefined){
        console.log("directory empty".yellow)
        return
    }
    else
    files.forEach(cv => {
        fs.unlink(`./directorioprueba/${cv}`, (err)=>{
        if(err){
        console.log("an error ocurred".red)
        }
        else
        console.log (`file:${cv} deleted`.green)
        }) 
    });
})

