import type { QA } from "../components/FAQ.astro"

type movieProps = {
    title: string;
    director: string;
    genres: string[];
    releaseDate: string;
    runtime: string;
    writer: string;
}

export const movieFAQs = (movie: movieProps): Array<QA> =>  [
        {
            question: `Who directed ${movie.title}?`,
            answer: `The movie was directed by ${movie.director}.`,
        },
        {
            question: `What genres does ${movie.title} belong to?`,
            answer: ` ${movie.title} is a ${movie.genres.join(", ")} movie.`,
        },
        {
            question: `When was ${movie.title} released?`,
            answer: `${movie.title} was released on ${movie.releaseDate}.`,
        },
        {
            question: `How long is ${movie.title}?`,
            answer: `The movie has a runtime of ${movie.runtime}.`,
        },
        {
            question: `Who wrote the screenplay for ${movie.title}?`,
            answer: `The screenplay was written by ${movie.writer}.`,
        },
    ] satisfies Array<QA>;