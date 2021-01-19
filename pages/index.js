import { getListPokemon } from '../lib/api';

import PokemanListItem from '../components/PokemanListItem';

export const getStaticProps = async () => {
    try {
        const pokemon = await getListPokemon();

        return { props: { pokemon } };
    } catch (err) {
        console.error(err);
    }
};

const Home = ({ pokemon }) => {
    return (
        <main className='home'>
            <h1 className='home__title'>Pokedex</h1>
            <ul className='home__pokeman'>
                {pokemon.map((pokeman, index) => (
                    <PokemanListItem key={index} index={++index} {...pokeman} />
                ))}
            </ul>
        </main>
    );
};

export default Home;
