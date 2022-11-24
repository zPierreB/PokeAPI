const createPokemons = (pokemons) => {
    const figure = document.createElement('figure');
    for (const pokemon of pokemons) {
        console.log(pokemon)
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        
        img.innerHTML = pokemon.url;
        h3.innerHTML = pokemon.name;

        div.append(img);
        div.append(h3);
        figure.append(div);
    }
    return figure;
}

export default createPokemons;