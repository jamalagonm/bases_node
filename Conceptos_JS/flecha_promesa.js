let deadpool = {
	nombre: "Wade",
	apellido: "Winston",
	poder: "Regeneración",
	getName: function(){
		return `${this.nombre} ${this.apellido} -poder: ${this.poder}`;
	}
}; 

console.log(deadpool.apellido);
console.log(deadpool.getName());

// Funcion tradicional
// function sumar(a,b){
// 	return a + b;
// }
 
// Función flecha convencional
// var suma = (a,b) =>{
// 	return a + b;
// }

// Arrow function one line
let suma = (a,b) => a+b;

console.log(suma(3,5));



function saludar(){
	return `Hola mundo`;
}

// Arrow function one line
let saluda = () => `Hola mundo`;
console.log(saludar());


