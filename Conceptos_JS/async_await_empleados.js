empleados = [{
        id : 1,
        nombre: "Johan"
    },{
        id : 2,
        nombre: "Andrés"
    },{
        id : 3,
        nombre: "Nepomuceno"
    }]


salarios =[{
        id: 1,
        salario: "2000" 
    },{
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
        if(!empleadoDB){
            reject(`No existe un empleado con el id ${id}`)
        }else{
            // console.log(empleadoDB);
            resolve(empleadoDB)
        }
    });
}

let getSalario = (empleado) =>{    
    return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if(!salarioDB){
        reject( "No existe un salario para el usuario: " + empleado.nombre);
        }else{
        resolve({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
        }
    });
}


/*
let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }}

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`)
    } else {
        return empleadoDB;
    }
}    
*/

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${ resp.nombre } tiene un salario de $${ resp.salario }`;
}

getInformacion(2)
    .then(msj => console.log(msj))
    .catch(err => console.log(err));