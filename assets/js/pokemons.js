const createPokemons = (pokemon, body) => {
    // const pokemons = document.getElementById("pokeList");
    const div = document.createElement('div');
    
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        body.setAttribute('id', 'pokeList');
        div.classList.add('onePokeCard');
        img.classList.add('pokePic');
        h3.classList.add("pokeName");

        img.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
        h3.innerHTML = pokemon.name;
        // img.append(div)
        div.append(img);
        div.append(h3);
        body.append(div);
        // figure.append(div);
}

export default createPokemons;