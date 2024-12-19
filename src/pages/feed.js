import {title} from "../API/defaultSiteValues";
import { YYYY } from "../API/time";
const year = YYYY();


export const GET = ({request}) =>{
    const url = new URL(request.url);
    const rootDomain = url.origin;
    let rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss
      version="2.0"
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
          <description>${title} ac ${year} - New Telugu, Tamil, Hindi &amp; English Movies HD Quality</description>
          <lastBuildDate>Wed, 18 Dec 2024 17:45:43 +0000</lastBuildDate>
          <language>en-US</language>
          <sy:updatePeriod>hourly</sy:updatePeriod>
          <sy:updateFrequency>1</sy:updateFrequency>`;

     rssFeed += `

        <item>
            <title>How to Learn JavaScript in 30 Days</title>
            <link>https://myawesomeblog.com/learn-javascript</link>
            <description>A comprehensive guide to mastering JavaScript quickly.</description>
            <pubDate>Sun, 17 Dec 2024 09:00:00 +0000</pubDate>
            <guid>https://myawesomeblog.com/learn-javascript</guid>
        </item>`;

    rssFeed += `
    </channel>
</rss>`

    return new Response(rssFeed, {
        headers: {
          'Content-Type': 'application/rss+xml',
        },
      });
}