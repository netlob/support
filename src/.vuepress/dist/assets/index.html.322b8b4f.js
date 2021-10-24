import{r as e,o as t,a as o,b as a,w as s,F as r,d as i,c as n}from"./app.44d236a7.js";const h={},u=a("h1",{id:"import-your-streaminghistory"},[a("a",{class:"header-anchor",href:"#import-your-streaminghistory"},"#"),i(" Import your streaminghistory")],-1),l=i("Spotify provides some data through "),m={href:"https://developer.spotify.com/documentation/web-api/reference/",target:"_blank",rel:"noopener noreferrer"},d=i("their api"),p=i(" but this does not include the amount of times you've streamed a specific artist or track"),f=a("p",null,"In order to gain access to these features you'll have to import your streaminghistory:",-1),c=a("li",null,"Playcount (for artists, tracks & albums)",-1),y=a("li",null,"Full streaminghistory (duhh)",-1),b=i("Order your top tracks & artists by the amount of streams "),g=i("instead of machine learning"),w=a("li",null,"All charts which include some amount of streams",-1),k=n('<h2 id="how-often-do-i-need-to-import-my-streaminghistory"><a class="header-anchor" href="#how-often-do-i-need-to-import-my-streaminghistory">#</a> How often do I need to import my streaminghistory?</h2><p>From the moment you&#39;ve imported your first endsong file the systems will automatically keep the file (actually the database, not an actual file) up-to-date about every 100 minutes. You can find a guide on how to import your streaminghistory into the app <a href="/import/guide">here</a></p><h2 id="why-does-the-app-show-a-different-number-of-streams-than-all-the-imported-files-summed-up"><a class="header-anchor" href="#why-does-the-app-show-a-different-number-of-streams-than-all-the-imported-files-summed-up">#</a> Why does the app show a different number of streams than all the imported files summed up?</h2><p>You may notice that the total amount of streams summed up from your imports doesn&#39;t match the number shown on the stats page. Spotistats filters out a couple types of streams:</p><ul><li>Skipped tracks* (since they make your stats inaccurate)</li><li>Streams under 30 seconds* (since they make your stats inaccurate)</li><li>Local files (since Spotify doesn&#39;t provide any info about these tracks, the tracks don&#39;t even have ID&#39;s...)</li><li>Podcasts (since Spotify does not have an API for them where I can request info about the podcast, not even the name...)</li></ul><p>* these types of streams are saved in the database, but &quot;hidden&quot; from the stats. Soon you&#39;ll be able to include/exclude these from your stats, but for now they&#39;re excluded</p>',6);h.render=function(i,n){const h=e("OutboundLink"),v=e("RouterLink");return t(),o(r,null,[u,a("p",null,[l,a("a",m,[d,a(h)]),p]),f,a("ul",null,[c,y,a("li",null,[b,a(v,{to:"/"},{default:s((()=>[g])),_:1})]),w]),k],64)};export default h;