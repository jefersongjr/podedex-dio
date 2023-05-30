const card = document.getElementById('pokemonCard')

function convertPokemonToHTML(pokemon) {
    return `
    <section class="cardTop ${pokemon.types[0].type.name}">
    <div class="cardName">
        <span>${pokemon.name}</span>
        <span>${pokemon.order}</span>
    </div>
    <ol class="types">
    ${pokemon.types.map((type) => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('')}
    </ol>

</section>
    <img 
        src=${pokemon.sprites.other.home.front_default}
        class="poke-img"
    >
<section class="cardBot">
    <div class="div-right-bot">
        <p>Name</p>
        <p>Heigth</p>
        <p>Weight</p>
        <p>H.P</p>
        <p>Atack</p>
        <p>Defense</p>
        <p>Speed</p>

    </div>
    <div>
        <p class="cardName">${pokemon.name}</p>
        <p>${pokemon.height / 10}</p>
        <p>${pokemon.weight / 10}</p>
        <p>${pokemon.stats[0].base_stat}</p>
        <p>${pokemon.stats[1].base_stat}</p>
        <p>${pokemon.stats[2].base_stat}</p>
        <p>${pokemon.stats[5].base_stat}</p>
    </div>

</section>
    `
}

const loadSelectedPokemon = async () => {
    const pokemon = localStorage.getItem('selectedPokemon')
    const cardPoke = await pokeApi.getPokemonDetails(JSON.parse(pokemon))
    card.innerHTML = convertPokemonToHTML(cardPoke)
}

loadSelectedPokemon()