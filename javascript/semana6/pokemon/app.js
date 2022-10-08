const btnGetPokemon = document.querySelector("#get-pokemons");

const urlPokemons = "https://pokeapi.co/api/v2/pokemon";

btnGetPokemon.onclick = async function(){
    // Como hacemos para que JS pueda extraer la informacion de
    // dicha web
    // En js existe la funcion "fetch que permite consumir"
    // de una URL
  
    // * PAra poder hacer que fetch termie la ejecucicon tenemos
    // que convertir nuestra funcion en async

    // Debe de haber un async y un await
    // El await espera a que se ejecute la peticion luego 
    // recien la muestrsa
    const respuesta = await fetch(urlPokemons);
    console.log(respuesta);
};