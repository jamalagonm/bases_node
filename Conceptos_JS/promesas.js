empleados = [{
        id: 1,
        nombre: "Johan"
    },
    {
        id: 2,
        nombre: "Andrés"
    },
    {
        id: 3,
        nombre: "Nepomuceno"
    },
]


salarios = [{
    id: 1,
    salario: "2000"
}, {
    id: 2,
    salario: "5000"
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        // empleado es el contenido de cada iteración de la lista
        // ya que cada posicion de la lista contiene un objeto es
        // válido llamar al  nombre de la iteración con el atributo 
        // del objeto
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con el id ${id}`)
        } else {
            // console.log(empleadoDB);
            resolve(empleadoDB)
        }
    });
}

let getSalario = (empleado) => {
    console.log(empleado)
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject("No existe un salario para el usuario: " + empleado.nombre);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}



getEmpleado(3).then(empleado => {
    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
    }, err => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});