import { options } from './apiOptions'
import { ThirtyDayAgoYYYYMMDD, TodayYYYYMMDD } from './time';

//movies in /home page 
export const loadMovies = async (num) => {
  const urls = [
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${num}&primary_release_date.gte=${ThirtyDayAgoYYYYMMDD()}&primary_release_date.lte=${TodayYYYYMMDD()}&sort_by=popularity.desc&with_origin_country=IN`,
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=${ThirtyDayAgoYYYYMMDD()}&primary_release_date.lte=${TodayYYYYMMDD()}&sort_by=popularity.desc&with_origin_country=US`,
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=${ThirtyDayAgoYYYYMMDD()}&primary_release_date.lte=${TodayYYYYMMDD()}&sort_by=popularity.desc&with_origin_country=KR`
  ]
  const res = await Promise.all(urls.map(async url => {
    const resp = await fetch(url, options);
    return resp.json();
  }));
  return res;
}

//all movies in /movie/ page
export const moviesList = async () => {
  const urls = [
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=${ThirtyDayAgoYYYYMMDD()}&primary_release_date.lte=${TodayYYYYMMDD()}&sort_by=popularity.desc&`,
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&primary_release_date.gte=${ThirtyDayAgoYYYYMMDD()}&primary_release_date.lte=${TodayYYYYMMDD()}&sort_by=popularity.desc&`,
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&primary_release_date.gte=${ThirtyDayAgoYYYYMMDD()}&primary_release_date.lte=${TodayYYYYMMDD()}&sort_by=popularity.desc&`
  ]
  const res = await Promise.all(urls.map(async url => {
    const resp = await fetch(url, options);
    return resp.json();
  }));
  return res;
}