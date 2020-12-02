var RSSFeed = require('rss-to-json');

// Parse RSS Feed
async function parseRssToJson (url) {
    var rss = await RSSFeed.load(url);
    console.log(JSON.stringify(rss, null, 3));
};

// Scraper Function - Runs for Each URL and Opens and Closes JSON as an Array
exports.run = async function scrapeProducts(urlArray) {
    console.log('[');

    // Parse Each URL
    for (let count = 0; count < urlArray.length; count++) {
        await parseRssToJson(urlArray[count]);
        if (count !== urlArray.length - 1) {
            console.log(',');
        }
    };

    console.log(']')
};