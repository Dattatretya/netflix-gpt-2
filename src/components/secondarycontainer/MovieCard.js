import React from 'react'
import { IMG_CDN } from '../../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div>
        {/* <p>{movie.original_title}</p> */}
        <div className='w-48 pr-4'>
        <img  src={IMG_CDN+movie.poster_path} alt='Movie Card'/>
        </div>
    </div>
  )
}

export default MovieCard