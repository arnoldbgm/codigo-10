// movies es la variable y aqui importamos del json
import movies from "./data.json" assert { type: "json" };

const container = document.querySelector(".container");
// Lo agrege
const inputBuscar = document.querySelector(".input-buscar");
const btnBuscar = document.querySelector(".btn-buscar");

btnBuscar.onclick = () => {
    const texto = inputBuscar.value;

    const moviesFiltradas = movies.entries.filter(
        (movie) => movie.title.toLowerCase() === texto.toLowerCase())
}

function readMovies() {
    movies.entries.forEach((movie, index) => {
        console.log(movie);
        container.innerHTML +=
            `<div class="movie">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg" alt="" />
            <h4>${movie.title}</h4>
            <p>
            ${movie.description}
        </p>
      </div>`
    });
}


readMovies();
