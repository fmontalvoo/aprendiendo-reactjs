import { useEffect, useState } from 'react';

const API_CAT_IMAGES = 'https://cataas.com';

export function useCatImage({ fact }) {
    const [image, setImage] = useState('');

    useEffect(() => {
        if (!fact) return;

        const firstWord = fact.split(' ', 1);

        fetch(`${API_CAT_IMAGES}/cat/says/${firstWord}?size=50&json=true`)
            .then(res => res.json())
            .then(({ url }) => setImage(url));
    }, [fact]);

    return { image: `${API_CAT_IMAGES}${image}` }
}