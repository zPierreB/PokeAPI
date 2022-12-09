class Fights {

    battlePokemon = () => {

        const search1stPoke = document.getElementById("1stPokemon");
        const search2ndPoke = document.getElementById("2ndPokemon");

        // search1stPoke.addEventListener('change', (event) => {
        //     const url = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`;
        //     const fetchPokemon = async() => {
        //         const response = await fetch(url)
        //         return await response.json();
        //     }
        //     console.log(fetchPokemon());
        // })

        search1stPoke.addEventListener('change', async(event) => {
            const url = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`;
            const response = await fetch(url);
            return await response.json()
            .then(async(data) => {
                let resultsStats;
                for(const d of data.stats) {
                    resultsStats += d.base_stat;
                }
                console.log(resultsStats);
            })
        })
    }

}

export default Fights;