import { moviesList } from "../API/latestMovies";
import { seoURL } from "../API/seoURL";
import { sitemapTime } from "../API/time";


export const GET = async ({request}) => {
    const time = sitemapTime();
    const [resp1, resp2, resp3] = await moviesList();

    const url = new URL(request.url);
    const rootDomain = url.origin;

    let sitemap = `<?xml version='1.0' encoding='UTF-8'?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    resp1.results.map((movie)=>{
        sitemap+= `

        <url>
            <loc>${rootDomain+"/movie/"+seoURL(movie.title)+"_"+movie.id+"/"}</loc>
            <lastmod>${time}</lastmod>
        </url>`;
    })

    resp2.results.map((movie)=>{
        sitemap+= `
        
        <url>
            <loc>${rootDomain+"/movie/"+seoURL(movie.title)+"_"+movie.id+"/"}</loc>
            <lastmod>${time}</lastmod>
        </url>`;
    })

    resp3.results.map((movie)=>{
        sitemap+= `
        
        <url>
            <loc>${rootDomain+"/movie/"+seoURL(movie.title)+"_"+movie.id+"/"}</loc>
            <lastmod>${time}</lastmod>
        </url>`;
    })

    sitemap+=`
</urlset>    
    `;


    return new Response(sitemap, {
        headers: {
          'Content-Type': 'application/atom+xml',
        },
      });
}