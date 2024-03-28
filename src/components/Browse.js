import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

  useNowPlayingMovies()

  // const movies = useSelector(store=>store.movies.nowPlayingMovies)

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse