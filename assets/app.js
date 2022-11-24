import Request from "./js/class/Request.js";
// import GenerateHTML from "./js/class/GenerateHTML.js";
// import createPokemons from './js/pokemons.js';


document.addEventListener('DOMContentLoaded', () => {

    const pokemons = document.getElementById("pokeList");
    // const pokemonsFR = document.getElementsByClassName(".onePokeCard");

    const body = document.querySelector('body');
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=151`;
    const request = new Request(apiUrl);
    // const generateHTML = new GenerateHTML(body);

    // const apiUrlNameFR = `https://pokeapi.co/api/v2/pokemon-species/?limit=151`;
    // const requestNameFR = new Request(apiUrlNameFR);

    // request.fetchData()
    //     .then((data) => {
    //         generateHTML.figure = createPokemons(data.results);
    //     })
    //     .catch(error => console.log(error));
    // console.log(generateHTML);
    
    request.fetchData()
        .then(data => data.results.map(async(pokemon) => {
            await fetch(pokemon.url)
                .then(response => response.json())
                .then(data => pokemons.innerHTML += 
                    `<div class="onePokeCard">
                        <img class="pokePic" src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"/>
                        <h3 class="pokeName">${data.name}</h3>
                    </div>`)
                .catch(error => console.log(error))
        }))
        .catch(error => console.log(error));
    
    // request.fetchData()
    //     .then(data => data.results.map(async(pokemon) => {
    //         request.fetchData(pokemon.url)
    //             .then()
    // }))
})