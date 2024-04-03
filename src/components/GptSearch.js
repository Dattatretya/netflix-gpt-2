import React from 'react'
import GptSearchBar from './gpt/GptSearchBar'
import GptMovieSuggestions from './gpt/GptMovieSuggestions'
import { BACKGROUND } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className=''>
      <div className='absolute -z-10 sm:bg-repeat-x'>
        <img src={BACKGROUND} alt='background netflix'
        className=''
        />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch