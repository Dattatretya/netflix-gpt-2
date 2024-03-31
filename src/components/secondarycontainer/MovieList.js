import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='p-2'>
    <div className=''>
        <h1 className='text-white font-bold text-3xl py-4'>{title}</h1>
    </div>
    <div className='overflow-x-scroll '>
        <div className='flex'>
        {movies?.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
        
        </div>
    </div>
    </div>
  )
}

export default MovieList