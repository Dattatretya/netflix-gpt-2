import { useSelector } from 'react-redux'
import useMovieTrailer from '../../hooks/useMovieTrailer'


const VideoBackground = ({movie_id}) => {

  const trailerId = useSelector(store=>store.movies?.trailerVideo?.key)
  
  useMovieTrailer(movie_id)

  return (
    <div> 
      <iframe width="560" height="315" 
      src={"https://www.youtube.com/embed/"+trailerId+"?si=YkZaNQlzFvQU6H6j"}
      title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground