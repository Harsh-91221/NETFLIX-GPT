import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BACKGROUND } from '../utils/constants'
const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BACKGROUND} alt="background"></img>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch