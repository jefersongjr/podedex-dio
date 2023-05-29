const pokeApi = {};

const convertPokemonDetailToPokemonClass = (pokeDetail) => {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [ type ] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

pokeApi.getPokemonsDetails = async (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(convertPokemonDetailToPokemonClass)
}

pokeApi.getPokemons = (offset = 0 , limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  return fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
  .then((detailsRequest) => Promise.all(detailsRequest))
  .then((pokemonDetails) => pokemonDetails)
}

pokeApi.getPokemonDetails = async (poke) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${poke}/`;
  return fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody)
}