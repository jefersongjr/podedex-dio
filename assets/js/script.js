const convertPokemonHtml = (pokemon) => {
    return `   <li class="pokemon ${pokemon.type}">
    <span class="number">${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="${ type } type">${ type }</li>`).join('')}
        </ol>
        <img src=${pokemon.photo} 
           alt="${pokemon.name} image">
    </div>
</li>`
 
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokes = []) => {
    pokemonList.innerHTML += pokes.map(convertPokemonHtml).join('')
})
.catch((error) => console.error(error))