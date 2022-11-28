class Pokemons {

    showPokemons = (pokemon, body) => {
        // const pokemons = document.getElementById("pokeList");
        const div = document.createElement('div');
        const divPokeList = document.getElementById('pokeList');

        const img = document.createElement('img');
        const h3 = document.createElement('h3');


        div.classList.add('onePokeCard');
        div.setAttribute("id", `${pokemon.id}`);
        img.classList.add('pokePic');
        h3.classList.add("pokeName");

        img.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
        // console.log(pokemon);
        h3.innerHTML = pokemon.name;

        div.append(img);
        div.append(h3);

        divPokeList.append(div);
        body.append(divPokeList);
        // figure.append(div);
        const getOneCard = document.getElementById(`${pokemon.id}`);

        const styleSelectCard = `
        position: absolute;
        transform: rotate(0deg);
        width: 220px;
        height: 300px;
        border-radius: 15px;
        cursor: pointer;
        text-align: center;
        transition: 0.4s;
        z-index: 99;`

        // getOneCard.addEventListener('click', () => {
        //     if (pokemon.types.length > 1) {
        //         const h4 = document.createElement('h4');
        //         div.append(h4);
        //         h4.innerHTML += "Types: " + pokemon.types[0].type.name + ' & ' + pokemon.types[1].type.name;
        //     } else {
        //         const h4 = document.createElement('h4');
        //         div.append(h4);
        //         h4.innerHTML += "Type: " + pokemon.types[0].type.name;
        //     }
        //     getOneCard.style.cssText = styleSelectCard;
        // }, { once: true });

        getOneCard.addEventListener('click', () => {
            const divBGOneCard = document.createElement('div');
            const divPokeCard = document.createElement('div');
            const imgOneCard = document.createElement('img');

            imgOneCard.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
            divPokeCard.classList.add('showCard');
            divBGOneCard.classList.add('showCardBG');

            divPokeCard.append(imgOneCard);
            divBGOneCard.append(divPokeCard);
            body.append(divBGOneCard);
        })
    }
}

export default Pokemons;