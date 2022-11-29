import Request from "./js/class/Request.js";
import Pokemons from "./js/pokemons.js";


document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=21`;
    // const request = new Request(apiUrl);
    const test = new Pokemons();

    // request.fetchData()
    //     .then(data => data.results.map(async(pokemon) => {
    //         fetch(pokemon.url)
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .then(data => test.showPokemons(data, body))
    //     }))
    //     .catch(error => console.log(error));

    const fetchPokemons = async() => {
        const response = await fetch(apiUrl);
        return await response.json();
    }
    
    const fetchPokemon = async(url) => {
        const response = await fetch(url);
        return await response.json();
    }
    
    const fetchPokemonColor = async(url) => {
        const response = await fetch(url);
        return await response.json()
    }
    
    fetchPokemons()
    .then(async(data) => {
        for(const d of data.results) {
            const pokemon = await fetchPokemon(d.url)
            test.showPokemons(pokemon, body)
            test.showOnePokemon(pokemon, body)
            // (async(poke) => {
            //     for(const p of poke.species) {
            //         const pokeColor = await fetchPokemonColor(p.url)
            //         test.getOneColor(pokeColor)
            //         // console.log(pokeColor);
            //     }
            // })
        }
    });


    // fetchPokemons()
    // .then(async(data) => {
    //     for(const d of data.results) {
    //         const pokemon = await fetchPokemon(d.url)
    //         .then(async(poke) => {
    //             const pokeColor = await fetchPokemonColor(poke.species.url)
    //                 test.getColorPokemon(pokeColor)
    //         })
    //         test.showPokemons(pokemon, body)
    //     }
    // })
})