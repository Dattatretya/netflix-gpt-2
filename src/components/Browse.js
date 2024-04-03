import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'

const Browse = () => {

  const viewGpt = useSelector(store=>store.gpt)

  useNowPlayingMovies()


  return (
    <div>
      <Header/>
      {viewGpt.showGptSearch ? <GptSearch/> : 
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      }
    </div>
  )
}

export default Browse