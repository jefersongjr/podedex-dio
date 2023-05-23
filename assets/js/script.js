const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

const convertPokemonHtml = (pokemon) => {
    return `   <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
           alt="${pokemon.name} image">
    </div>
</li>`
 
}

const pokemonList = document.getElementById('pokemonList');

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokes) => {
        pokes.map((pokemon) => pokemonList.innerHTML +=(convertPokemonHtml(pokemon)))
    })
    .catch((error) => console.error(error))