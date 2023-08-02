import { useEffect, useState, useRef } from 'react'

export function useSearch() {
    const [error, setError] = useState(null)
    const [query, updateQuery] = useState('')

    const isInitialMount = useRef(true)

    useEffect(
        () => {
            if (isInitialMount.current) {
                isInitialMount.current = query === ''
                return
            }

            if (query === '') {
                setError('No hay un término de búsqueda')
                return
            }

            setError(null)
        },
        [query]
    )

    return { error, query, updateQuery }

}