// Primero se lee un objeto con informacion de BD, luego
// se evalua el id, si llega a ser 20 se dispara el primer 
// callback que hace referencia a un error, en caso contrario
// continua el programa
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Andrés",
        id: id
    }
    if (id === 20){
        callback(`El usuario con id ${id} NO existe en BD`);
    }else{
        // debido a que es el segundo callback, el primer argumento
        // debe ser null para indicarle que no hay errores
        callback(null, usuario);
    }
}

// Cuando se ejecuta la función, el primer argumento
// de un callback es un señalador de err, el cual apunta
// al primer callback, en sel segundo argumento se llama
// la acción a realizar

getUsuarioById(20,(err,usuario) =>{
    if(err){
        return console.log(err);
    }
    console.log("Usuario de base de datos", usuario);
});