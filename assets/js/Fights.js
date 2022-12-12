class Fights {

    battlePokemon = () => {

        const fightButton = document.getElementById("btnFight");
        
        fightButton.addEventListener('click', async(event) => {
            event.preventDefault();

            const divForm = document.getElementById("formPokemon");
            const h3 = document.createElement('h3');

            const input1stPokemon = document.getElementById("1stPokemon").value;
            const get1stPokeStats = await this.fetch1stPokemon(input1stPokemon);

            const input2ndPokemon = document.getElementById("2ndPokemon").value;
            const get2ndPokeStats = await this.fetch2ndPokemon(input2ndPokemon);

            if(get1stPokeStats > get2ndPokeStats) {
                h3.innerHTML = input1stPokemon;
                divForm.append(h3);
                console.log(`${input1stPokemon}`)
            } else if(get1stPokeStats < get2ndPokeStats) {
                h3.innerHTML = input2ndPokemon;
                divForm.append(h3);
                console.log(`${input2ndPokemon}`)
            }
        })
    }

    fetch1stPokemon = async(url) => {
        const url1 = `https://pokeapi.co/api/v2/pokemon/${url}`;
        const response = await fetch(url1);
        return await response.json()
        .then(async(data) => {
            let resultStats = 0;
            for(const d of data.stats) {
                resultStats += d.base_stat;
            }
            console.log(resultStats)
            return resultStats;
            })
    }

    fetch2ndPokemon = async(url) => {
        const url2 = `https://pokeapi.co/api/v2/pokemon/${url}`;
        const response = await fetch(url2);
        return await response.json()
        .then(async(data) => {
            let resultStats2 = 0;
            for(const d of data.stats) {
                resultStats2 += d.base_stat;
            }
            console.log(resultStats2);
            return resultStats2;
            })
    }
}

export default Fights;