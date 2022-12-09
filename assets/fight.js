import Fights from "./js/Fights.js";

document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=151`;
    const fight = new Fights();

    
    // fetchDatas()
    // .then(async(data) => {
    //     for(const d of data.results) {
    //         const pokemon = await fetchData(d.url)
    //         console.log(pokemon);
    //         fight.battlePokemon(pokemon, body)
    //     }
    // })
    fight.battlePokemon()

})