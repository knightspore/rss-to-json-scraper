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

## Testing

Install dev dependencies and run 
```bash
yarn test
```
or
```bash
npm run test
```
To ensure that the scraper returns a valid JSON object.