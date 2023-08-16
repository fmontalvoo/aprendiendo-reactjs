import { useState } from 'react'

import { searchMovies } from '../services/movies'

export function useMovies({ search }) {
    const [movies, setMovies] = useState([])

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getMovies = async () => {
        try {
            setError(null)
            setLoading(true)
            const movies = await searchMovies({ search })
            setMovies(movies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        movies,
        getMovies,
        loading,
        error,
    }
}