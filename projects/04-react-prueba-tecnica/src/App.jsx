import { useEffect, useState } from 'react';
import './App.css';
import { getRandomFact } from './services/facts';

const API_CAT_IMAGES = 'https://cataas.com';

export function App() {
    const [fact, setFact] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => getRandomFact().then(setFact), []);

    useEffect(() => {
        if (!fact) return;

        const firstWord = fact.split(' ', 1);

        fetch(`${API_CAT_IMAGES}/cat/says/${firstWord}?size=50&json=true`)
            .then(res => res.json())
            .then(data => {
                const { url } = data;

                setImage(url);
            });

    }, [fact]);

    const handleClick = async () => {
        const newFact = await getRandomFact();
        setFact(newFact);
    }

    return (
        <main>
            <h1>Random Cat Fact</h1>
            <button onClick={handleClick}>Get new fact</button>
            {/* <section> */}
            {fact && <p>{fact}</p>}
            {image && <img src={`${API_CAT_IMAGES}${image}`} alt={`Image extracted using the fact: ${fact}`} />}
            {/* </section> */}
        </main>
    );
}