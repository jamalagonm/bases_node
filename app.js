/**
 * Usada para introduci datos por consola de manera ordenada
 * Evita fallos  ya que obtiene los valores metódicamente sin importar el orden
 */
const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", {
        base: {
            demand: true, //obligatorio
            alias: "b"
        },
        limite: {
            alias: "l",
            default: 10 //Por defecto
        }
    })
    .help()
    .argv;


const { crearArchivo } = require("./multiplicar/multiplicar"); //Desestructurar

/**
 * Almacena en argv los argumentos de entrada desde consolla
 * el primero es la ubicación de node.exe
 * el segundo es el path del propio script
 * el tercero es el introducido por el usuario
 */
// let argv = process.argv;
// let parametro = argv[2];
/**
 * El string se convierte en array tomando como caracter de separación
 * el signo igual y se toma el segundo valor de la lista
 */
// let base = parametro.split("=")[1];

/* console.log(module) */
/* console.log(process.argv); */
// console.log(base);

let argv2 = process.argv;
console.log("base: ", argv.base);
console.log("límite: ", argv.limite);
console.log(argv2);


/* crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err)); */