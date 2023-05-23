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

pokeApi.getPokemons().then((pokes = []) => {
    pokemonList.innerHTML += pokes.map(convertPokemonHtml(pokemon)).join('')
})
.catch((error) => console.error(error))