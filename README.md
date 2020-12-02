# RSS to JSON Products Parser

## Usage
First, require the package
```js
const Scraper = require('rss-products-parser');
```

Create an array of RSS Feeds you Want to Scrape
```js
let urls = ['https://example.com/products/feed',...];
```

Run the scraper
```js
console.log(Scraper.run(urls));
```