console.log("Tarea Api file system")

const fs = require("fs")
const colors =require("colors")

// fs.writeFile("textFs.txt", "este es mi archivo creado desde node usando fs 2.", "utf8", (err)=>{
//     if(err){
//         console.log(`Sucedio el error: ${error}`)
//         return
//     }
//     console.log("el archivo fue creado con exito".green)
//     })

fs.readFile("./textFs.txt","utf8", (err, data)=>{
    if(err){
        console.log(`Sucedio el error: ${error}`)
        return
    }
    console.log("el archivo fue leido con exito".green)
    console.log(data)
    })