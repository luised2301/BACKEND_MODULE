
const colors =require("colors")
// promesas -> El resultado de un proceso asincrono

//! Reglas ->
//? Tienen 3 estados:
//*     -Pending
//*      -Rejected->Si ocurrio un error(Si fue rechazada)-
//*     -Accepted->Si se resolvio (si fue acepatada)

//!Al momento de hacer la promesa, declaracion de la promesa:
//lass promesas se resuelven o se rechazan
//  -Resolverla
//  -Rechazarla

//!Al momento de ejecutarlas:
// Recibir el rechazo o recibir la aceptacion
// .then -> para recibir lo resuelto
// .catch -> para recibir lo rechazado -> El error

const pastel = {

}

const getRecipe = (cakeToIngredients) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            cakeToIngredients.gotRecipe = true;
            if (!cakeToIngredients.gotRecipe) {
                reject ("Missing Recipe");
            }
            resolve(cakeToIngredients)
        }, 1000);
    })
}
const getIngredients = (cakeToDough) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            cakeToDough.gotIngredients = true;
            if (!cakeToDough.gotIngredients) {
                reject ("Missing Ingredients");
            }
            resolve(cakeToDough)
        }, 1000);
    })
}

const getDough = (cakeToCook) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            cakeToCook.gotDough = true;
            if (!cakeToCook.gotDough) {
                reject ("Missing Dough");
            }
            resolve(cakeToCook)
        }, 1000);
    })
}

const getCook = (cakeToDecor) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            cakeToDecor.gotcook = true;
            if (!cakeToDecor.gotcook) {
                reject ("Cake Not Cooked");
            }
            resolve(cakeToDecor)
        }, 1000);
    })
}

const getDecor = (cakeReady) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            cakeReady.gotReady = true;
            if (!cakeReady.gotReady) {
                reject ("Cake not Decored");
            }
            resolve(cakeReady)
        }, 1000);
    })
}





const cakeToIngredients = getRecipe({...pastel})
.then((cakeToIngredients)=>{
    console.log("Reacipe Ready",cakeToIngredients)
    const cakeToDough = getIngredients({...cakeToIngredients})
    .then((cakeToDough)=>{
        console.log("Ingredients Ready",cakeToDough)
        const cakeToCook = getDough({...cakeToDough})
        .then((cakeToCook)=>{
            console.log("Dough Ready",cakeToCook)
            const cakeToDecor = getCook({...cakeToCook})
            .then((cakeToDecor)=>{
                console.log("Cake Cooked",cakeToDecor)
                const cakeReady = getDecor({...cakeToDecor})
                .then((cakeReady)=>{
                    console.log("cake Decored",cakeReady)

                    console.log("cake Ready!".rainbow)
                })
                .catch((error)=>{
                    console.log("error:",error)
                })
            })
            .catch((error)=>{
            console.log("error:",error)
            })
        })
        .catch((error)=>{
            console.log("error:",error)
        })       
    })
    .catch((error)=>{
        console.log("error:",error)
    })
})
.catch((error)=>{
    console.log("error:",error)
})