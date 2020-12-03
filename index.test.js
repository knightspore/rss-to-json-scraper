const scraper = require('./index')
const toBeType = require('jest-tobetype')
expect.extend(toBeType);

var onTheseUrls = [
    'https://marijuanasa.co.za/product-category/marijuana-seeds/feed/',
    'https://www.cannabist.co.za/cannabis-seeds/feed/',
    'https://www.biltongandbudz.co.za/shop/feed/',
    'https://thehighco.co.za/product-category/cannabis-seeds/feed/',
    'https://cbseeds.co.za/shop/feed/',
];

test('Performs Scrape to check if Results are in JSON', () => {
    expect(scraper.run(onTheseUrls)).toBeType("object")
})