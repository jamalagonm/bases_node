fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(data => {
        let arrayNombres = [];
        data.results.forEach(element => {
            //console.log(element);
            arrayNombres.push(element.name);
        });
        //console.log(arrayNombres);
    })
    .catch(error => console.log(error))

//async await

const obtenerPokemones = async() => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await res.json();
        //console.log(data.results);
        // función map es un foreach simplificado
        const arrayNombres = data.results.map(poke => poke.name);
        const pokeFilter = data.results.filter(poke => poke.name === "pidgey");
        console.log(arrayNombres);
        console.log(pokeFilter);
    } catch (error) {
        console.log(error);
    }
}

obtenerPokemones();