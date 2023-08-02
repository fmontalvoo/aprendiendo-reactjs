import './App.css'

// import { useRef } from 'react'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  // const inputRef = useRef()

  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()

    // const inputEl = inputRef.current
    // const value = inputEl.value

    // const fields = new FormData(event.target)
    // const value = fields.get('query')

    const fields = Object.fromEntries(new FormData(event.target))
    const { query: value } = fields

    console.log(value)
  }

  return (
    <div className='page'>
      <h1>Buscador de películas</h1>

      <header>
        <form className='form' onSubmit={handleSubmit}>
          {/* <input ref={inputRef} className='input' type="text" name='query' placeholder='Search...' /> */}
          <input className='input' type="text" name='query' placeholder='Search...' />
          <button type='sumbit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
