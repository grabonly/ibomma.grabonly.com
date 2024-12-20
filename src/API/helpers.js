import { countries } from "../data/countries.json";
import { langs } from "../data/lang.json";
import { options } from "./apiOptions";

// map genres [created fun to use in multiple places]
export const joinGenres = (genres) => {

    return genres.map(genre => genre.name).join(", ");
}

// map production companies[created fun to use in multiple places]
export const productionCompanies = (companies) => {

    return companies.map(company => company.name).join(", ") || "N/A"
}

// Get movie Credits[cast, crew] from movieID
export const movieCredits = async (id) => {

    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options);
    const credits = await resp.json();

    return credits;
}

// extracting supporting roles upto 6
export const supportRoles = (cast) => {
    let supportingChars = [];
    for (let i = 2; i < (cast.length < 8 ? cast.length : 8); i++) {
        supportingChars.push(cast[i].name);
    }
    return supportingChars.join(", ");
}

// filter Crew
export const filterCrew = (crew, job) => {

    return crew.filter(member => member.job == job).map(person => person.name).join(", ") || "N/A"
}

// format date from "2024-12-04" to "December 4, 2024"
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

//Finding langFullName by shortcode
export const findLang = langCode => langs.find(lang => lang.iso_639_1 == langCode)?.english_name || "N/A";
export const findCountry = countryCode => countries.find(country => country.iso_3166_1 == countryCode)?.english_name || "N/A";

//rssDescEncoder
export const encodeRSSDescription = (description) => {
    return description
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}