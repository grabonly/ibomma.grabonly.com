import { options } from "./apiOptions";

export const personMovies = async (id) => {

    const resp = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`, options);
    const movies = await resp.json();
    return movies;
}