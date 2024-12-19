import {options} from './apiOptions'

export const searchMovie = async (movie) => {
    
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}& include_adult=false&language=en-US&page=1`, options);
    const results = await resp.json();
        
    return results;
}