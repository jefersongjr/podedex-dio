const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

fetch(url).then((response) => {
    console.log(response)
})

const x = 10 + 10;
console.log(x)