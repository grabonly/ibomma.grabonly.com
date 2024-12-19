import {options} from './apiOptions'

export async function genreMovies(genreId){

    const bin = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`, options);
    const movies = await bin.json();
    return movies
}