import NextHead from 'next/head';

const Head = () => {
    return (
        <NextHead>
            <meta charSet='UTF-8' />
            <title>Pokedex</title>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <meta name='description' content='Pokedex page built with NextJS' />
        </NextHead>
    );
};

export default Head;
