import Request from "./js/class/Request.js";
import Pokemons from "./js/pokemons.js";


document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=21`;
    // const request = new Request(apiUrl);
    const test = new Pokemons();

    // Fetch all pokemon
    const fetchPokemons = async () => {
        const response = await fetch(apiUrl);
        return await response.json();
    }

    // Fetch 1 pokemon by recuperate the url with the id of the pokemon
    const fetchPokemon = async (url) => {
        const response = await fetch(url);
        return await response.json();
    }

    // loop my data to show all pokemons with their infos
    fetchPokemons()
        .then(async (data) => {
            for (const d of data.results) {
                const pokemon = await fetchPokemon(d.url)
                test.showPokemons(pokemon, body)
            }
        });
})