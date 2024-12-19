import { options } from "./apiOptions"

export const movieDetails = async (id) => {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
    const details = await resp.json();

    return details;
}