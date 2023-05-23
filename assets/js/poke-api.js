

const pokeApi = {};

pokeApi.getPokemons = (offset = 0 , limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
}