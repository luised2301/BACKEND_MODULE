console.log("Session 5 Callbacks Koder Example")

const fs = require("fs")
const colors =require("colors")

/**
 * 1 - Pedir informes
 * 2 - Entrevista
 * 3 - Pagar (becado)
 * 4 - Inscripcion
 */

/**
 * 1 - Con callbacks
 */

 const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInscribio: false,
};

const darInformes = (koderADarInformes, callback) => {
    let error = null;
    setTimeout(() => {
        // Voy a darle informes al koder
        koderADarInformes.seDieronInformes = true;

        // Si el koder no fue informado, lanzar un error
        if (!koderADarInformes.seDieronInformes) {
            error = "No ha sido informado";
        }
        callback(error, koderADarInformes);
    }, 3000);
};

const entrevistar = (koderAEntrevistar, callback) => {
    let error = null;
    setTimeout(() => {
        koderAEntrevistar.seEntrevisto = true;

        if (!koderAEntrevistar.seEntrevisto) {
            error = "No se pudo entrevistar";
        }

        callback(error, koderAEntrevistar);
    }, 2000);
};

const pagar = (koderAPagar, callback) => {
    let error = null;
    setTimeout(() => {
        koderAPagar.sePago = false;

        if (!koderAPagar.sePago) {
            error = "No se ha pagado";
        }

        callback(error, koderAPagar);
    }, 5000);
};

const inscribir = (koderAInscribir, callback) => {
   let error = null;

   setTimeout(() => {
       koderAInscribir.seInscribio = true

       if(!koderAInscribir.seInscribio) {
           error = "No se pudo inscribir"
       }

       callback(error, koderAInscribir)

   }, 1000)
};

/**
 * Asincronidad -> cuando se hacian varias cosas al mismo tiempo
 */

darInformes({ ...koder }, (error, koderConInformes) => {
    if (error) {
        console.log("error:", error);
        return; // Salte
    }

    // Es cuando ya me hizo todo
    // Aqui se espero, el koder ya tiene informes
    entrevistar({ ...koderConInformes }, (error, koderEntrevistado) => {
        if (error) {
            console.log("error", error);
            return;
        }

        // Vamos a pagar
        pagar({ ...koderEntrevistado }, (error, koderPagado) => {
            if (error) {
                console.log("error", error);
                return;
            }

            // Inscribirlo
            inscribir({...koderPagado}, (error, koderInscrito) => {
                if(error) {
                    console.log("error", error)
                    return
                }

                console.log("Exito", koderInscrito)
            })
        });
    });
});


/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}