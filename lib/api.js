const { BASE_URL } = process.env;

const getListPokemon = async () => {
    const res = await fetch(`${BASE_URL}pokemon?limit=150`);
    const { results } = await res.json();

    const pokemon = results.map((result, index) => {
        const paddedIndex = ('00' + ++index).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

        return { ...result, image };
    });

    return pokemon;
};

const getPokeman = async (id) => {
    const res = await fetch(`${BASE_URL}/pokemon/${id}`);
    const pokeman = await res.json();

    const paddedIndex = ('00' + id).slice(-3);
    pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

    return pokeman;
};

export { getListPokemon, getPokeman };
