import results from '../mocks/with-results.json'
// import noResults from '../mocks/no-results.json'

export function useMovies() {
    const movies = results.Search

    const mappedMovies = movies.map(movie => ({
        id: movie.imdbID,
        year: movie.Year,
        title: movie.Title,
        poster: movie.Poster,
    }))

    return {
        movies: mappedMovies,
    }
}