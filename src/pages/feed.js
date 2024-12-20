import {title} from "../API/defaultSiteValues";
import { loadMovies } from "../API/latestMovies";
import { seoURL } from "../API/seoURL";
import { YYYY, rssFeedTime } from "../API/time";

export const GET = async ({request}) =>{
    const year = YYYY();
    const [resp1, resp2, resp3] = await loadMovies(1);

    const url = new URL(request.url);
    const rootDomain = url.origin;

    let rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"
        xmlns:content="http://purl.org/rss/1.0/modules/content/"
        xmlns:wfw="http://wellformedweb.org/CommentAPI/"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:atom="http://www.w3.org/2005/Atom"
        xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
        xmlns:slash="http://purl.org/rss/1.0/modules/slash/">

    <channel>

        <title>${title}</title>
        <atom:link href="${rootDomain+"/feed/"}" rel="self" type="application/rss+xml" />
        <link>${rootDomain}</link>
        <description>${title} ac  - ${year} New Telugu, Tamil, Hindi &amp; English Movies HD Quality</description>
        <lastBuildDate>${rssFeedTime(true)}</lastBuildDate>
        <language>en-US</language>
        <sy:updatePeriod>hourly</sy:updatePeriod>
        <sy:updateFrequency>1</sy:updateFrequency>`;

resp1.results.map(movie =>{
    rssFeed += `
    
        <item>
            <title>${movie.title} full movie review</title>
            <link>${rootDomain+"/movie/"+seoURL(movie.title)+"_"+movie.id+"/"}</link>
            <description>${movie.overview}</description>
            <pubDate>${rssFeedTime(false)}</pubDate>
            <guid>${rootDomain+"/movie/"+seoURL(movie.title)+"_"+movie.id+"/"}</guid>
        </item>`;
});

resp2.results.map(movie =>{
    rssFeed += `
    
        <item>
            <title>${movie.title} full movie review</title>
            <link>${rootDomain+"/movie/"+seoURL(movie.title)+"_"+movie.id+"/"}</link>
            <description>${movie.overview}</description>
            <pubDate>${rssFeedTime(false)}</pubDate>
            <guid>${rootDomain+"/movie/"+seoURL(movie.title)+"_"+movie.id+"/"}</guid>
        </item>`;
});

resp3.results.map(movie =>{
    rssFeed += `
    
        <item>
            <title>${movie.title} full movie review</title>
            <link>${rootDomain+"/movie/"+seoURL(movie.title)+"_"+movie.id+"/"}</link>
            <description>${movie.overview}</description>
            <pubDate>${rssFeedTime(false)}</pubDate>
            <guid>${rootDomain+"/movie/"+seoURL(movie.title)+"_"+movie.id+"/"}</guid>
        </item>`;
});


    rssFeed += `

    </channel>
</rss>`

    return new Response(rssFeed, {
        headers: {
          'Content-Type': 'application/rss+xml',
        },
      });
}