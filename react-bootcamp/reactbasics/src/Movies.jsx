import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import "./Movies.css"

const Movies = () => {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  const fetchMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=482b31fa&s=&s=${search}`,
      {
        method: 'GET',
      });
    const data = await response.json()
    console.log({ data })
    if (data.Response === "True") setMovies(data.Search)
    if (data.Response === "False") setMovies([])
  }

  useEffect(() => {
    fetchMovies();
  }, [setMovies])

  return (
    <>
      <div className='search'>
        <input type='text' value={search} onChange={(e) => {
          setSearch(e.target.value)
        }} />
        <button onClick={fetchMovies}>Search</button>
      </div>
      {
        (movies.length || !setSearch) ? <div className='movie-container'>
          {
            movies.map((movie) => {
              return (
                <MovieCard movieTitle={movie.Title} moviePoster={movie.Poster} key={movie.imdbID} />
              )
            })
          }
        </div> : <h1>No Results</h1>
      }
    </>
  )
}

export default Movies
