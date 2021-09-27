empleados = [
    {
        id : 1,
        nombre: "Johan"
    },
    {
        id : 2,
        nombre: "Andrés"
    },
    {
        id : 3,
        nombre: "Nepomuceno"
    },
]


salarios =[
    {
        nombre: "Johan",
        salario: "2000" 
    },
    {
        nombre: "Andrés",
        salario: "5000" 
    }
];

let getEmpleado = (id, callback) => {
    // Itera sobre la lista, sabiendo que en cada posición
    // hay un objeto para cuando hayan coincidecias o termine el
    // recorrido, si hay match el objeto se almacena en la variable 
    // empleadoDB
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if(!empleadoDB){
        callback(`No existe un empleado con el ID ${id}`);
    } else{
        // Si no hay error se declara en los argumentos que err es null
        callback(null, empleadoDB);
    } 
};

let getSalario = (empleado, callback) =>{   
    let salarioDB = salarios.find(salario => salario.nombre === empleado.nombre);

    if(!salarioDB){
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else{
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario            
        });
    } 
}


getEmpleado(2, (err,empleado) => {
    if(err){
        return console.log(err);
    }
    getSalario(empleado, (err, objetoDatos) =>{
        if (err){
            return console.log(err);
        }
        return console.log(`El salario de ${objetoDatos.nombre} es: ${objetoDatos.salario} `);
    });
});