class Pokemons {

    showPokemons = (pokemon, body) => {

        const div = document.createElement('div');
        const divPokeList = document.getElementById('pokeList');

        const img = document.createElement('img');
        const h3 = document.createElement('h3');


        div.classList.add('onePokeCard');
        div.setAttribute("id", `${pokemon.id}`);
        img.classList.add('pokePic');
        h3.classList.add("pokeName");

        img.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
        h3.innerHTML = pokemon.name;

        div.append(img);
        div.append(h3);

        divPokeList.append(div);
        body.append(divPokeList);
    }

    showOnePokemon = (pokemon, body) => {

        const getOneCard = document.getElementById(`${pokemon.id}`);

        getOneCard.addEventListener('click', () => {

            const divCrose = document.createElement('div');
            divCrose.innerHTML = 'X';

            const divCardBG = document.createElement('div');
            const divShowCard = document.createElement('div');
            const imgContainer = document.createElement('div');
            const img = document.createElement('img');
            const h3 = document.createElement('h3');

            divCardBG.classList.add('cardBG');
            divShowCard.classList.add('showCard');
            imgContainer.classList.add('imgContainer');
            img.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
            h3.classList.add('showCardName');
            h3.innerHTML = pokemon.name;

            divCardBG.append(divCrose);
            divShowCard.append(h3);
            imgContainer.append(img);
            divShowCard.append(imgContainer);
            divCardBG.append(divShowCard);
            body.append(divCardBG);

            divCrose.addEventListener('click', () => {
                divCardBG.remove();
            })

            if(pokemon.types.length > 1) {
                const h4 = document.createElement('h4');
                divShowCard.append(h4);
                h4.innerHTML += "Types: " + pokemon.types[0].type.name + ' & ' + pokemon.types[1].type.name;
            } else {
                const h4 = document.createElement('h4');
                divShowCard.append(h4);
                h4.innerHTML += "Type: " + pokemon.types[0].type.name;
            }
            // this.getColorPokemon("green");
        });
    }

    getColorPokemon = (color) => {
        const showCard = document.querySelectorAll('.showCard');
        console.log(color.color.name);
        showCard.style = `backgroundColor: ${color.color.name}`
        return showCard;
    }
}

export default Pokemons;