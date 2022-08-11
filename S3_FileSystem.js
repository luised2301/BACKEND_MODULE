console.log("Tarea Api file system")

const fs = require("fs")
const colors =require("colors")


//?Create File
// fs.writeFile("textFs.txt", "este es mi archivo creado desde node usando fs 2.", "utf8", (err)=>{
//     if(err){
//         console.log(`Sucedio el error: ${error}`)
//         return
//     }
//     console.log("el archivo fue creado con exito".green)
//     })

//? Read File
// fs.readFile("./textFs.txt","utf8", (err, data)=>{
//     if(err){
//         console.log(`El archivo no pudo ser leido`)
//         return
//     }
//     console.log("el archivo fue leido con exito".green)
//     console.log(data)
//     })


//?Patch  file 

// fs.appendFile("./textFs.txt", "this is an extra line","utf8", (err)=>{
//     if(err){
//         console.log("an error happend".red)
//         return
//     }
//     else
//     console.log("patch succeded".green)
// })


//?Delete file
// fs.unlink("./textFs.txt", (err)=>{
//     if(err){
//         console.log("an error ocurred".red)
//     }
//     else
//     console.log ("file deleted".green)
// })


//? Leer un directorio e imprimir los archivos que contiene
// fs.readdir("directorio", "utf-8", (err,files)=>{
//     if(err) throw err
//     console.log ("files:", files)
// })
