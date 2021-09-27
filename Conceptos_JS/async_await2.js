/**
 *  Await no puede existir sin el Async
 */
let getNombre3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Andrés")
        }, 3000);
    });
}

// Por medio de ellos se pueden realizar trabajos sincronos
// mientras no se reciba la respuesta de la promesa  getNombre3,
// no se continuara la ejecución

let saludo = async() => {
    let nombre = await getNombre3();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});
