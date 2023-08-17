import { useRef, useState, useMemo, useCallback } from 'react'

import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
    const previusSearch = useRef(search)
    const [movies, setMovies] = useState([])

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getMovies = useCallback(async ({ search }) => {
        console.log('getMovies', search)
        if (previusSearch.current === search) return

        try {
            setError(null)
            setLoading(true)
            previusSearch.current = search
            const movies = await searchMovies({ search })
            setMovies(movies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [])

    // const sortMovies = () => {
    //     const srotedMovies = sort
    //         ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    //         : movies
    //     return srotedMovies
    // }


    const sortedMovies = useMemo(() =>
        sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
        , [movies, sort]);


    return {
        movies: sortedMovies,
        getMovies,
        loading,
        error,
    }
}