

export const fetchPokemon = async () => {
    const random = Math.floor(Math.random() * 150 + 1)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    const data = await response.json();

    const correctPokemon = {
        name: data.name,
        imageURL: data.sprites.other.dream_world.front_default,
    };


    const wrongPokemons = [];
    while (wrongPokemons.length < 3) {
        const rand = Math.floor(Math.random() * 249 + 1);
        if (rand !== random) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
            const wrongData = await res.json();
            wrongPokemons.push(wrongData.name);
        }
    }

    const options = shuffleArray([correctPokemon.name, ...wrongPokemons]);

    return {
        pokemonName: data.name, pokemonImage: data.sprites.other.dream_world.front_default,
        ...correctPokemon,
        options,
    };
};

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
