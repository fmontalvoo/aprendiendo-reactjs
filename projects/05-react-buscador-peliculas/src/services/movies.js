const API_KEY = import.meta.env.VITE_API_KEY

export const searchMovies = ({ search }) => {
    if (search === '') return null

    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        .then(res => res.json())
        .then(data => {
            const movies = data?.Search
            return movies?.map(movie => ({
                id: movie.imdbID,
                year: movie.Year,
                title: movie.Title,
                poster: movie.Poster,
            }))
        })
        .catch(e => {
            console.error(e)
            return null
        })
}