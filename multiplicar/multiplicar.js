const fs = require("fs"); //filesystem

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" NO es un número`);
            return;
        }

        let data = "";

        for (let i = 1; i <= 10; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }


            console.log(`El archivo tabla-${base}.txt ha sido creada`);
        });
    })
}

module.exports = {
    crearArchivo
}