const API_CAT_FACTS = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
    const res = await fetch(API_CAT_FACTS);
    const data = await res.json();
    const { fact } = data;
    return fact;
}