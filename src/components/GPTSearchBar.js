import React, { useRef } from 'react'
import lang from '../utils/languageContants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMoviesResult } from '../utils/GPTSlice';

const GPTSearchBar = () => {
    const dispatch = useDispatch()
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    const handleGPTSearch = async () => {
        console.log(searchText.current.value);
        const GPTQuery = "Act as a movie recommendation system and suggest some movies for query" +
            searchText.current.value +
            "onlt give me name of five movies,comma seperated like the example result give ahead. Example Result:Gadar,Sholay,Don,Hungama,Golmaal";
        const GPTResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: GPTQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(GPTResults.choices?.[0]?.message?.content);
        const GPTMovies = GPTResults.choices?.[0]?.message?.content.split(",");
        const promiseArray = GPTMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGPTMoviesResult({ moviesNames: GPTMovies, movieResults: tmdbResults }));
    };
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGPTSearch}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar