import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-48 pr-5'>
            <img alt='Movie' src={IMG_CDN + posterPath}></img>
        </div>
    )
}

export default MovieCard