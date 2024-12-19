import { options } from "./apiOptions";

export const personDetails = async (id) => {

    const resp = await fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`, options);
    const person = await resp.json();
    return person;
}