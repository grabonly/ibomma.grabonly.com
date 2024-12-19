import type { APIRoute } from "astro";

// const imgURL = "https://images.tmdb.org/t/p/w92/";
const imgURL = "https://images.tmdb.org/t/p/";

export const GET: APIRoute = ({ params }) => {
    // console.log("/api/images/poster_path:" + JSON.stringify(params))
    // var res = fetch(new URL(imgURL + params.poster_path))
    var res = fetch(imgURL +params.size+"/"+ params.poster_path)
    // console.log("api request" + JSON.stringify(params))
    // console.debug(res)
    // console.log(params,"hi")
    return res
}