import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice'

const useMovieTrailer = (movie_id)=>{

    const dispatch = useDispatch()

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos", API_OPTIONS)
    
        const json = await data.json()
    
        const filtered = json.results.filter((item)=>(
          item.type==="Trailer"
        ))
    
        const trailer =filtered.length? filtered[0] : json.results[0]
    
        dispatch(addTrailerVideo(trailer)) 
    
        //console.log(trailer)
      }
    
      useEffect(()=>{
        getMovieVideos()
      },[])
}

export default useMovieTrailer