import React from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
        <div>
            <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
            <MovieCard />
        </div>
    )
}

export default SecondaryContainer