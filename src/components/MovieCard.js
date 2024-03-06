import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="sm:w-48 w-36 mr-3 cursor-pointer">
            <img alt="Movie Card" src={IMG_CDN + posterPath} />
        </div>
    );
};
export default MovieCard;