import React from 'react'
import MovieList from './secondarycontainer/MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

const SecondaryContainer = () => {

  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  const movies = useSelector(store=>store.movies)
  console.log(movies)

  return (
    <div className=' bg-black'>
      <div className='md:-mt-72 relative z-20 sm:-mt-14'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies?.upcominMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer