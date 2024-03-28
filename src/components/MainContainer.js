import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './maincontainer/VideoTitle'
import VideoBackground from './maincontainer/VideoBackground'

const MainContainer = () => {

    const data = useSelector(store=>store.movies?.nowPlayingMovies)

    if (!data) return

    const movie = data[0]


        

    const {original_title, overview, id} = movie

    //console.log(movie)

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer