import { options } from "./apiOptions";

export const movieAssets = async (id) => {
    const urls = [
      `https://api.themoviedb.org/3/movie/${id}/images`,
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    ]
    const res = await Promise.all(urls.map(async url => {
      const resp = await fetch(url, options);
      return resp.json();
    }));
    return res;
}