import { useEffect, useState } from 'react';
import './App.css';

const API_CAT_FACTS = 'https://catfact.ninja/fact';
const API_CAT_IMAGES = 'https://cataas.com';

export function App() {

    const [fact, setFact] = useState('');
    const [image, setImage] = useState('');

    useEffect(
        () => {
            fetch(API_CAT_FACTS)
                .then(res => res.json())
                .then(data => {
                    const { fact } = data;

                    setFact(fact);
                });
        },
        []
    );

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

    return (
        <main>
            <h1>Random Cat Fact</h1>
            {/* <section> */}
            {fact && <p>{fact}</p>}
            {image && <img src={`${API_CAT_IMAGES}${image}`} alt={`Image extracted using the fact: ${fact}`} />}
            {/* </section> */}
        </main>
    );
}