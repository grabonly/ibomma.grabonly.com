import { genres } from "./genres";

export const getGenreID = (genre_name) => {
    const genre = genres.find(g => g.name.toLowerCase() === genre_name.toLowerCase());
    return genre ? genre.id : null;
}