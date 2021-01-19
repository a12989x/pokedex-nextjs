import Link from 'next/link';
import Image from 'next/image';

const PokemanListItem = ({ image, name, index }) => {
    return (
        <li className='pokemanListItem'>
            <Link href={`/pokeman?id=${index}`}>
                <a className='pokemanListItem__link'>
                    <Image
                        src={image}
                        alt={name}
                        width='200'
                        height='200'
                        layout='responsive'
                    />
                    <span>{index}.</span>
                    {name}
                </a>
            </Link>
        </li>
    );
};

export default PokemanListItem;
