import Image from 'next/image';
import Link from 'next/link';

import { getPokeman } from '../lib/api';

export const getServerSideProps = async ({ query }) => {
    const id = query.id;

    try {
        const pokeman = await getPokeman(id);

        return { props: { pokeman } };
    } catch (err) {
        console.error(err);
    }
};

const Pokeman = ({ pokeman }) => {
    return (
        <main className='pokeman'>
            <Link href='/'>
                <a className='pokeman__back'>
                    <button>&#8592;Go Back</button>
                </a>
            </Link>

            <h1 className='pokeman__name'>{pokeman.name}</h1>
            <Image
                src={pokeman.image}
                alt={pokeman.name}
                width='200'
                height='200'
                layout='responsive'
                className='pokeman__img'
            />
            <p className='pokeman__property'>
                <b>Weight: </b>
                {pokeman.weight}
            </p>
            <p className='pokeman__property'>
                <b>Height: </b>
                {pokeman.height}
            </p>
            <section className='pokeman__typesContainer'>
                <h2 className='pokeman__types'>Types:</h2>
                <ul>
                    {pokeman.types.map((type, index) => (
                        <li key={index} className='pokeman__property'>
                            - {type.type.name}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Pokeman;
