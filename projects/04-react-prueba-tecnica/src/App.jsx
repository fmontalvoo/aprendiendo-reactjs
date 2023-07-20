import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from './hooks/useCatImage';

import './App.css';

export function App() {
    const { fact, getFact } = useCatFact();
    const { image } = useCatImage({ fact });

    const handleClick = () => { getFact() }

    return (
        <main>
            <h1>Random Cat Fact</h1>
            <button onClick={handleClick}>Get new fact</button>
            {/* <section> */}
            {fact && <p>{fact}</p>}
            {image && <img src={image} alt={`Image extracted using the fact: ${fact}`} />}
            {/* </section> */}
        </main>
    );
}