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

        div.append(h3);
        div.append(img);

        divPokeList.append(div);
        body.append(divPokeList);
    }

    showOnePokemon = (pokemon, body) => {

        const getOneCard = document.getElementById(`${pokemon.id}`);

        getOneCard.addEventListener('click', async() => {

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
            const fetchPokemonColor = async(url) => {
                const response = await fetch(url);
                return await response.json()
            }

            if (pokemon.types[0].type.name == "normal") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #bab9b4, #f6f5f1, #d1d0cd);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/normalBG.jpg');
                background-size: cover;
                `
            } else if (pokemon.types[0].type.name == "fighting") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #812d13, #a74227, #65301a);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/fightingBG.jpg');
                background-size: cover;
                `
            } else if (pokemon.types[0].type.name == "flying") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #a33918, #7d311d, #552b19);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/flyingBG.jpg');
                background-size: cover;
                `
            } else if (pokemon.types[0].type.name == "poison") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #885CA6, #BF88BC, #7751A3);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/poisonBG.jpg');
                background-size: cover;
                `
            } else if (pokemon.types[0].type.name == "ground") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #a77f16, #d6a732, #8e7732);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/groundBG.jpg');
                background-size: cover;
                `
            } else if (pokemon.types[0].type.name == "rock") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #C56A3C, #F1C498, #BD5D37);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/rockBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "bug") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #7f9402, #b3e605, #7f9b20);
                `;
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/bugBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "ghost") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #3200b1, #5408ee, #3b00b9);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/ghostBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "steel") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #93928e, #e3e2de, #a7a6a4);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/grayBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "fire") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #a71616, #d63232, #8e3232);
                `;
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/fireBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "water") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #44BBEC, #89D4F6, #03A6E0);
                `;
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/waterBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "grass") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #3f9e3b, #41cd3c, #359f44);
                `;
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/grassBG.jpg');
                background-size: cover;
                `;
            } else if(pokemon.types[0].type.name == "electric") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #F1D235, #FCF374, #FAD601);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/psychicBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "psychic") {
                divShowCard.style = `
                background:linear-gradient(45deg, #6B2F82, #A48AC1, #966CAE);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/psychicBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "ice") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #7be4ed, #b0f8ff, #4caeb9);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/iceBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "dragon") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #6b7342, #757334 ,#524336);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/dragonBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "dark") {
                divShowCard.style = `
                background:linear-gradient(45deg, #0D1E26, #2B6D85, #284C62);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/psychicBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "fairy") {
                divShowCard.style = `
                background:linear-gradient(-120deg, #7A1036, #FF7EBE, #F5D0E2);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/psychicBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "unknown") {
                divShowCard.style = `
                background:linear-gradient(45deg, #7A1036, #FF7EBE, #F5D0E2);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/psychicBG.jpg');
                background-size: cover;
                `
            } else if(pokemon.types[0].type.name == "shadow") {
                divShowCard.style = `
                background:linear-gradient(45deg, #7A1036, #FF7EBE, #F5D0E2);
                `
                imgContainer.style = `
                background-image: url('./assets/img/backgroundPokemon/psychicBG.jpg');
                background-size: cover;
                `
            }

            console.log(pokemon.types[0].type.name);
            // const color = await fetchPokemonColor(pokemon.species.url)
            // console.log(color.color.name)
            // if(color.color.name == "purple") {
            //     divShowCard.style = `
            //     background: linear-gradient(to bottom, #6441a5, #2a0845);
            //     `
            //     imgContainer.style = `
            //     background-image: url('./assets/img/backgroundPokemon/purpleBG.jpg');
            //     background-size: cover;
            //     `
            // } else if(color.color.name == "black") {
            //     divShowCard.style = `
            //     background:linear-gradient(to right, #040404, #000000, #656565);
            //     `
            //     imgContainer.style = `
            //     background-image: url('./assets/img/backgroundPokemon/blackBG.jpg');
            //     background-size: cover;
            //     `
            // } else if(color.color.name == "white") {
            //     divShowCard.style = `
            //     background:linear-gradient(45deg, #EEEEEE, #FAF8F9, #FFFFFF);
            //     `
            //     imgContainer.style = `
            //     background-image: url('./assets/img/backgroundPokemon/whiteBG.jpg');
            //     background-size: cover;
            //     `
            // } else if(color.color.name == "brown") {
            //     divShowCard.style = `
            //     background:linear-gradient(-120deg, #a33918, #7d311d, #552b19);
            //     `
            //     imgContainer.style = `
            //     background-image: url('./assets/img/backgroundPokemon/brownBG.jpg');
            //     background-size: cover;
            //     `
            // } else if(color.color.name == "gray") {
            //     divShowCard.style = `
            //     background:linear-gradient(-120deg, #93928e, #e3e2de, #a7a6a4);
            //     `
            //     imgContainer.style = `
            //     background-image: url('./assets/img/backgroundPokemon/grayBG.jpg');
            //     background-size: cover;
            //     `
            // }
        });
    }
}

export default Pokemons;