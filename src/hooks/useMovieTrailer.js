import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const TrailerMovies = useSelector((store) => store.movies.TrailerMovies);
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        !TrailerMovies && getMovieVideos();
    }, [])
}
export default useMovieTrailer;