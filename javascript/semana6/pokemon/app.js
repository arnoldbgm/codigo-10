const btnGetPokemon = document.querySelector("#get-pokemons");

const urlPokemons = "https://pokeapi.co/api/v2/pokemon";
const container = document.querySelector(".container");

btnGetPokemon.onclick = async function(){
    // Como hacemos para que JS pueda extraer la informacion de
    // dicha web
    // En js existe la funcion "fetch que permite consumir"
    // de una URL
  
    // * PAra poder hacer que fetch termie la ejecucicon tenemos
    // que convertir nuestra funcion en async

    // Una promesa es una accion que no se ejecuta

    // Debe de haber un async y un await
    // El await espera a que se ejecute la peticion luego 
    // recien la muestrsa
    const respuesta = await fetch(urlPokemons);

    // Crearemos una variable que guarde la informacion q
    // el servidor responde

    // Lo va a parsear de Json => Objeto
    // Siempre debemos de convertir un json a un objeto
    // para que Js lo pueda entedner
    const data = await respuesta.json();
    readPokemons(data.results)
};


// ? Esto es by me SI FUNCION 😁😎😎
// async function showPokemons(){
//     const respuesta = await fetch(urlPokemons);
//     const data = await respuesta.json();
//     data.results.forEach((pokemonElement, index) => {
//         console.log(pokemonElement);
//         container.innerHTML +=
//             `<div class="movie">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg" alt="" />
//             <h4>${pokemonElement.name}</h4>
//             <p>
//             ${pokemonElement.url}
//         </p>
//       </div>`
//     });
// }

// showPokemons();

function readPokemons(pokemons){
    container.innerHTML = "";
    pokemons.forEach((pokemon,index) =>{
        container.innerHTML +=
            `<div class="movie">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg" alt="" />
            <h4>${pokemon.name}</h4>
            <p>
            ${pokemon.url}
        </p>
      </div>`
    });
}