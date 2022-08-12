console.log("Session 5 Callbacks")

const fs = require("fs")
const colors =require("colors")

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

 const pastel = {

}


const getRecipe = (cakeToIngredients, callback) => {
    let error = null;
    setTimeout(() => {
        cakeToIngredients.gotRecipe = true;
        if (!cakeToIngredients.gotRecipe) {
            error = "Missing Recipe";
        }
        callback(error, cakeToIngredients);
    }, 1000);
};

const getIngredients = (cakeToPrep, callback) => {
    let error = null;
    setTimeout(() => {
        cakeToPrep.gotIngredients = true;
        if (!cakeToPrep.gotIngredients) {
            error = "Missing Ingredients";
        }
        callback(error, cakeToPrep);
    }, 1000);
};

const getDough = (cakeToCook, callback) => {
    let error = null;
    setTimeout(() => {
        cakeToCook.gotDough = true;
        if (!cakeToCook.gotDough) {
            error = "Missing Dough";
        }
        callback(error, cakeToCook);
    }, 1000);
};

const getCook = (cakeToDecor, callback) => {
    let error = null;
    setTimeout(() => {
        cakeToDecor.gotCook = true;
        if (!cakeToDecor.gotCook) {
            error = "Missing Cook";
        }
        callback(error, cakeToDecor);
    }, 1000);
};

const getDecor = (cakeReady, callback) => {
    let error = null;
    setTimeout(() => {
        cakeReady.gotDecor = true;
        if (!cakeReady.gotDecor) {
            error = "Missing Decoration";
        }
        callback(error, cakeReady);
    }, 1000);
};


getRecipe({ ...pastel }, (error, cakeWithRecipe) => {
    if (error) {
        console.log("error:", error);
        return; // Salte
    }
    console.log("Recipe Ready")
    getIngredients({ ...cakeWithRecipe }, (error, cakeWithIngredients) => {
        if (error) {
            console.log("error:", error);
            return; // Salte
        }
        console.log("Ingredients Ready")
        getDough({ ...cakeWithIngredients }, (error, cakeWithDought) => {
            if (error) {
                console.log("error:", error);
                return; // Salte
            }
            console.log("Dough ready")
            getCook({ ...cakeWithDought }, (error, cakeCooked) => {
                if (error) {
                    console.log("error:", error);
                    return; // Salte
                }
                console.log("Cake cooked")
                getDecor({ ...cakeCooked }, (error, cakeready) => {
                    if (error) {
                        console.log("error:", error);
                        return; // Salte
                    }
                    console.log("El pastel esta listo")
            })
        });
    });
});

});