import { useEffect, useState } from 'react';

import { getRandomFact } from '../services/facts';

export const useCatFact = () => {
    const [fact, setFact] = useState('');

    const getFact = () => {
        getRandomFact()
            .then(setFact);
    }

    useEffect(getFact, []);

    return { fact, getFact };
}