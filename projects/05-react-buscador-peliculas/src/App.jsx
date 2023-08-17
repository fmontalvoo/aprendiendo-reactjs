import { useState } from 'react'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

import './App.css'

function App() {
  // const inputRef = useRef()
  const [sort, setSort] = useState(false)
  const { error, query, updateQuery } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search: query, sort })

  const handleSubmit = (event) => {
    event.preventDefault()

    // const inputEl = inputRef.current
    // const value = inputEl.value

    // const fields = new FormData(event.target)
    // const value = fields.get('query')

    // const fields = Object.fromEntries(new FormData(event.target))
    // const { query: value } = fields

    console.log(query)

    getMovies({ search: query })
  }

  const handleChange = (event) => {
    const { value } = event.target
    if (value.startsWith(' ')) return
    updateQuery(value)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <h1>Buscador de películas</h1>

      <header>
        <form className='form' onSubmit={handleSubmit}>
          {/* <input ref={inputRef} className='input' type="text" name='query' placeholder='Search...' /> */}
          <input value={query} onChange={handleChange} className='input' type="text" name='query' placeholder='Search...'
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='sumbit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading
            ? <p>Loading...</p>
            : <Movies movies={movies} />
        }
      </main>
    </div >
  )
}

export default App
