/**
 *   Async Await 
 */

// Async por si solo retorna una promesa
// simplificando el código
let getNombre1 = async () => {
    throw new Error("No existe un nombre para este usuario");
    return "Andrés";
};
console.log(getNombre1());

// La función anterior es equivalente a decir
let getNombre2 = () => {
    return new Promise((resolve, reject) => {
        resolve("Andrés");
    });
}
console.log(getNombre2());

getNombre1().then(nombre => {
    console.log("nombre");
})
.catch(error => {
    console.log("Erroe de ASYNC", error);
});



