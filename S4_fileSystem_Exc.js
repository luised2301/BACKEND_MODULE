console.log("Api file system Session 4")

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



//!Esta es la solucion de Ale:


// const path = "directorioprueba"
// fs.readdir(path, "utf-8", (err, files)=>{
//     if(err) throw err
//     console.log("files:",files)
//     if(files.length ===0){
//         console.log(`directory: ${path} empty`.red )
//         return
//     }
//     files.forEach(file => {
//         fs.unlink(`${path}/${file}`, err=>{
//             if (err) throw err
//             console.log (`La eliminacion del ${file} fue exitosa`)
//         })
//     })
// })