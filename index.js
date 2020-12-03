var RSSFeed = require('rss-to-json');

// Parse RSS Feed
async function parseRssToJson (url) {
    var rss = await RSSFeed.load(url);
    return JSON.stringify(rss, null, 3);
};

// Scraper Function - Runs for Each URL and Opens and Closes JSON as an Array
exports.run = async function scrapeProductsFrom(theUrlList) {
    var ref = [];

    // Parse Each URL
    for (let index = 0; index < theUrlList.length; index++) {
        var currentUrl = await parseRssToJson(theUrlList[index]);
        ref.push(currentUrl);
    };

    console.log(ref);
};